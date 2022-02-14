<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="BeFit-list">
            <ion-list-header>BeFit</ion-list-header>
            
            <ion-note></ion-note>
  
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
  
          <ion-list id="labels-list">
            <ion-list-header></ion-list-header>
  
            <ion-item v-for="(label, index) in labels" lines="none" :key="index">
              <ion-icon  :ios="bookmarkOutline" :md="bookmarkSharp"></ion-icon>
              <ion-label>{{ label }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { grid, nutrition, bookmarkOutline, bookmarkSharp, barChart, accessibility, analytics, calendar, help, funnel, build } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane,
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: 'Inicio',
        url: '/folder/Inicio',
        iosIcon: grid,
        mdIcon: grid,
        
      },
      {
        title: 'Usuario',
        url: '/folder/Usuario',
        iosIcon: accessibility,
        mdIcon: accessibility
      },
      {
        title: 'Progreso',
        url: '/folder/Progreso',
        iosIcon: analytics,
        mdIcon: analytics
      },
      {
        title: 'Registro',
        url: '/folder/Registro',
        iosIcon: barChart,
        mdIcon: barChart
      },
      {
        title: 'Recetas',
        url: '/folder/Recetas',
        iosIcon: nutrition,
        mdIcon: nutrition
      },
      {
        title: 'Menu semanal',
        url: '/folder/MenuSemanal',
        iosIcon: calendar,
        mdIcon: calendar
      },
      {
        title: 'Ajustes',
        url: '/folder/Ajustes',
        iosIcon: build,
        mdIcon: build
      },
      {
        title: 'Ayuda',
        url: '/folder/Ayuda',
        iosIcon: help,
        mdIcon: help
      }
    ];
    
    
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
    const route = useRoute();
    
    return { 
      selectedIndex,
      appPages, 
      nutrition, 
      bookmarkOutline, 
      bookmarkSharp, 
      barChart,
      build, 
      accessibility, 
      analytics, 
      calendar, 
      help,
      isSelected: (url: string) => url === route.path ? 'selected' : ''
      
    }
  }
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, rgb(255, 255, 255)));/*fondo pantalla emergente*/
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  color: #0d0e0d;
}

ion-label p.title {
  background:  rgb(166, 228, 157);
}

ion-menu.md ion-list {/*lista opciones*/
  padding: 20px 0;
  color: #067a0c;
  
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
  color: #067a0c
}

ion-menu.md ion-list#BeFit-list {
  border-bottom: 1px solid var(--ion-color-step-150,  #ffffff);
}

ion-menu.md ion-list#BeFit-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  
  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  

  min-height: 26px;
}

ion-menu.md ion-item { /*Nombre pestaña*/
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 12px;
  color: #000000;
  
}

ion-menu.md ion-item.selected { /*letra selected*/
  --background: #067a0c;
  
}

ion-menu.md ion-item.selected ion-icon { /*seleccionado icono*/
  color: #ffffff;
}

ion-menu.md ion-item ion-icon { /*icono no seleccionado*/
  color: #067a0c;
}

ion-menu.md ion-item ion-label { /*boton tambien?*/
  font-weight: 500;
  
}

ion-menu.md ion-item.selected ion-label { /*boton tambien?*/
  font-weight: 500;
   color: #ffffff;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
  color: #067a0c;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
  color: #067a0c;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
  color: #067a0c;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  /*color: var(--ion-color-primary);*/
  color: #067a0c;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #067a0c;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
   --background: var(--ion-item-background, var(--ion-background-color,  rgb(166, 228, 157)));
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
  
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  
  color: #2aa731;
}
</style>