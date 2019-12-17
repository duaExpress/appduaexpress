import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  constructor(public afAuth : AngularFireAuth) {}

  // Registro de usuario
  registerUser(email:string, password:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);

  }

  // Login de usuario
  loginUser(email:string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  // Devuelve la session
  get Session(){
    return this.afAuth.authState;
  }

  // Logout de usuario
  logout() {
    this.afAuth.auth.signOut().then(()=> {
      // hemos salido
    });
  }

}
