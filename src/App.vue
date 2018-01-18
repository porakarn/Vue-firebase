<template>
  <v-app style="font-family: kanit">
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark  style=" background-color: #1DBA9C" >
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>

        <router-link class="sorns"  to="/" tag="span"   style="cursor: pointer; font-family: kanit">Sorns</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items dark class="hidden-xs-only" >
        <v-btn style="font-family: kanit"
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout

        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
       <v-tabs fixed centered>
         
    <v-tabs-bar  style=" background-color: #1DBA9C" dark >
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item
        v-for="i in items"
        :key="i"
        :href="'#tab-' + i"
      >
        {{ i }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in items"
        :key="i"
        :id="'tab-' + i"
      >
  
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>

    <main>
      <router-view>
 
    </router-view> <br><br><br><br>
   <!-- <v-card fixed>
    <v-bottom-nav
     class="opp"
      shift
      :value="true"
      :active.sync="e3"
     
    >
      <v-btn >
        <span>Video</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>
      <v-btn >
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>
      <v-btn>
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>
      <v-btn >
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card> -->

    </main>
 
    
    


  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      
        items: ['สมัครติวเddddตอร์', 'จองงาน', 'ดูเอกสารสอน']
      ,
        sideNav: false,
      //     e3: 1,
      //   e31: true
       }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }


 
</script>

<style lang="stylus">
  @import './stylus/main'

  .opp{
      background-color: #F8F8F8;
    border-color: #E7E7E7;
  }

 
</style>

.sorns{
  font-family: arial,
  color: green
}


// style="  z-index: 1;
    
//    box-shadow: 0 2px 3px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.23);
//     "




     