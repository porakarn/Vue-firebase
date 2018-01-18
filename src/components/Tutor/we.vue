<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              
                <p style="font-family: kanit">sddssd</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li style="font-family: kanit" v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
    //    this.countries.filter(function(el) {
    //      return el.name.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1;
    //    });
    //  }
        
        computed: {
         
            filteredFruits() {
            
                return this.fruits.filter((element) => {
                    return element.toLowerCase().indexOf(this.filterText.toLowerCase()) !== -1;
                });
            }
        }
    }
</script>

<style>
</style>
