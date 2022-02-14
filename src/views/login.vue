<template>
  <ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <form>
    <ion-item lines="full">
      <ion-label position="floating">Email</ion-label>
      <ion-input type="text" email required></ion-input>
    </ion-item>
    <ion-item lines="full">
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" password required></ion-input>
    </ion-item>
    <ion-row>
      <ion-col>
        <ion-button type="submit" (click)="onLogin(email, password)" expand="block">Login</ion-button>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <p class="ion-text-end">
          <a routerLink="/forgot-password">Forgot password? </a>
        </p>
      </ion-col>
    </ion-row>
    <span class="center-span"> or </span>
    <ion-row>
      <ion-col>
        <ion-button type="submit" color="danger" (click)="onLoginGoogle()" expand="block"
          >Login with Google
        </ion-button>
      </ion-col>
    </ion-row>
  </form>
  <ion-row>
    <ion-col>
      <p class="ion-text-end">
        <a routerLink="/register">Create an account </a>
      </p>
    </ion-col>
  </ion-row>
</ion-content>
</template>


<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background:  rgb(166, 228, 157);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  background:  rgb(166, 228, 157);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  background:  rgb(166, 228, 157);
  margin: 0;
}
ion-title{
  color:#067a0c;
  font-weight: 700;
}

#container a {
  text-decoration: none;
  background:  rgb(166, 228, 157);
}
</style>
