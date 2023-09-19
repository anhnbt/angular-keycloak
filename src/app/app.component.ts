import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import Keycloak, { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }

  // async onLogin() {
  //   const keycloak = new Keycloak({
  //     url: 'http://localhost:8080',
  //     realm: 'myrealm',
  //     clientId: 'myclient',
  //   });
  //   try {
  //     const authenticated = await keycloak.init({
  //       onLoad: 'check-sso',
  //       silentCheckSsoRedirectUri:
  //         window.location.origin + '/assets/silent-check-sso.html',
  //     });
  //     console.log(
  //       `User is ${authenticated ? 'authenticated' : 'not authenticated'}`
  //     );
  //   } catch (error) {
  //     console.error('Failed to initialize adapter:', error);
  //   }
  // }
}
