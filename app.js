console.log('Hello vue')


const app = Vue.createApp({
    //data, functions, components
    //template: '<h2> template</h2>'

    data() {
        return {
            showItems: true,
            url: 'https://google.com.ua',
            urltitle: 'Google search',
            urltext: 'google me',
            // title :'The Final Empire',
            // author : 'O Sonich',
            // age: 34,
            items:[
                {title :'The Final Empire', author : 'O Sonich', age: 34, img: 'src/assets/img/img1.png', isFav: true},
                {title :'The First Empire', author : 'O Sonich', age: 44,  img: 'src/assets/img/img2.png', isFav: false},
                {title :'The Latest Empire', author : 'O Sonich', age: 24,  img: 'src/assets/img/img3.png', isFav: true},
                {title :'The 4th Empire', author : 'O Sonich', age: 14,img: 'src/assets/img/img3.png', isFav: false},
            ],
            hideitem : 'Hide items',
            showitem : 'Show items',
            year: 2021,
            x:0,
            y:0
        }
    },
    methods: {
        changeTitle(){
            console.log('I see changeTitle method'),
            this.title = 'Sasha 2'
        },
        changeTitleArgument(mytitle) {
            console.log('I see changeTitleArgument method')
            this.title = mytitle
        },
        changeRule() {
            console.log('I see changeRule method'),            
            this.showItems = false           
        },
        toggleShowItems() {
            console.log('I see toggleShowItems method'),
            //this.showItems = false,
            this.showItems = !this.showItems,
            this.spantitle = 'Show items'
        },
        handleEvent(e, data){
            console.log(e.type, ' eventData ', e )
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFavorite(item) {
           item.isFav = !item.isFav;

             
        }
    },
    computed: {
        filteredItems() {
            //return 'hello filteredItems'
            return this.items.filter( (item) => item.isFav)

        }
    }

})


app.mount('#app')