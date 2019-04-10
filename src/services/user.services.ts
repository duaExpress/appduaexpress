import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService{

  user: AngularFirestoreDocument<any>;
  users: AngularFirestoreCollection<any>;
  authUser:any;


  constructor(public database: AngularFirestore) {
    //Auth user
    this.authUser = JSON.parse(window.localStorage.getItem('user'));
    //App User
    if (this.authUser != null) {
      this.user = this.getUserById(this.authUser.uid);
    }
  }

  public getUserById(id){
    // return this.database.object('/users/' + id);
    return this.database.doc('/users/' + id);
  }

  public getUserObsById(id) : Observable<User>{
    return this.database.doc<User>('/users/' + id).valueChanges();
  }

  public getLocalUser(){
    return this.authUser;
  }

  public getUser() : Observable<User>{
   return this.getUserObsById(this.authUser.user.uid);
  }



  public getUsers(){
    return this.database.collection('/users');
  }

  public getAppUsers() {
    let appUsers : Observable<User[]>;
    this.users = this.getUsers();

    appUsers = this.users.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const user = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          user.uid=id;
          //console.log('id: ' + id);
          return user;
        });
      }));

    return appUsers;
  }

  public updateUser(userParam: User) {
    this.users.doc(userParam.uid).update({
      //email: userParam.email, Not Editable
      name: userParam.name,
      company: userParam.company,
      tel: userParam.tel,
      cif: userParam.cif,
      active: userParam.active,
      profile: userParam.profile,
      address: userParam.address,
      postalCode: userParam.postalCode,
      city: userParam.city,
      state: userParam.state,
      emailNotif: userParam.emailNotif
    });
  }

  public updateUserFromRegistry(userParam: User) {
    this.users.doc(userParam.uid).update({
      //Solo estos campos
      name: userParam.name,
      company: userParam.company,
      tel: userParam.tel,
      cif: userParam.cif,
      address: userParam.address,
      postalCode: userParam.postalCode,
      city: userParam.city,
      state: userParam.state
    });
  }

  public deleteUser(uid) {
    this.users.doc(uid).delete();
  }

  async isUserAlreadyRegistered(email):Promise<boolean> {
    var db = this.database.firestore;
    let queryRef = db.collection("users").where("email", '==', email);
    var result:boolean = false;

    await queryRef.get().then(function(querySnapshot){
      if (querySnapshot.empty){
        result = false;
      }else{
        result = true;
      }
    });

    return result;
  }

}
