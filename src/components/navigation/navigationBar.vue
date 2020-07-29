<template>
    <div>
        <v-app-bar
                app
                color="blue accent-4"
                dark
                flat
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
        >
            <v-list>
                <v-list-item :key="item.title" :to="item.routeTo" v-for="item in items">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "navigationBar",
        data: () => ({
            drawer: null,
            items: [
                {title: "Dashboard", icon: "mdi-home", routeTo: {name: "Dashboard"}},
                {title: "About", icon: "mdi-progress-question", routeTo: {name: "About"}},
            ]
        }),
    }
</script>

<style scoped>

</style>