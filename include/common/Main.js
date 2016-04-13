
function Main(){
    /**
     *
     * @param order
     * @param sortBy
     * @returns {*}
     */
    this.sortByKey = function(order, sortBy) {
            var ordAlpah = (order == 'asc') ? '>' : '<';
            var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
            //console.log(sortFun);
            return sortFun;
    }
    /**
     *
     * @returns {*|string}
     */
    this.sprintf = function ()
    {
        var arg = arguments,
            str = arg[0] || '',
            i, n;
        for (i = 1, n = arg.length; i < n; i++) {
            str = str.replace(/%s/, arg[i]);
        }
        return str;
    }
    /**
     *
     * @param ListView
     * @returns {{data: Array, loading: boolean, dataSource: *, page: number, end: boolean}}
     */
    this.initialListData = function(ListView){
        var ds = null;
        if(ListView)
             ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return {
            data: [],
            loading: false,
            dataSource: ds,
            page: 1,
            end: false,
            loadErr:false
        }
    }
    /**
     *
     * @param url
     * @param component
     */
    this.loadData= function (component,url) {

        if (component.state.loading || component.state.end)
            return;
        component.setState({
            loading: true
        })
        //console.log(url);
        fetch(url)
            .then((res)=> res.json())

            .then((res)=> {
                //console.log(res);
                var end = false;
                var data = component.state.data.concat(res.data);
                if (res.data.length == 0)
                    end = true;

                var page = component.state.page + 1;
                //console.log('b '+component.state.page+(new Date));


                component.setState({
                    page: page,
                    data: data,
                    dataSource: component.state.dataSource.cloneWithRows(data),
                    loading: false,
                    end: end,
                    loadErr:false,
                });

            }).catch((e)=>{
                //console.log(e);
                component.setState({
                    loadErr:true,
                    loading: false,

                });

        })
    }
    /**
     *
     * @param component
     * @param router
     * @param params
     */
    this.goRouter = function (component,router,params) {
        //this.props.navigator.replace({ name: 'video',passProps: params });

        component.props.navigator.push({
            name: router,
            passProps: params
        });
    }


}

var Main = new Main();
module.exports = Main;