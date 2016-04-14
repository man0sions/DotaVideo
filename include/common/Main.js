
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
     * @param url
     * @returns {{protocol: *, host: *, hostname: *, port: (*|number), pathname: *, query: {}, search: (*|string), hash: *}}
     */
    this.urlParse= function(url) {
        var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
        var query = {};
        if(match && match[6])
        {
            var q = match[6].replace("?","").split("&");

            for(var i=0;i< q.length;i++)
            {
                var [k,v] = q[i].split("=");
                query[k] = v;
            }

        }
        var res =   {
                protocol: match[1],
                host: match[2],
                hostname: match[3],
                port: match[4] || 80,
                pathname: match[5],
                query: query,
                search: match[6]||'',
                hash: match[7]
            }
        return res;

    }
    /**
     *
     * @param url
     * @returns {*|XML|void|string}
     */
    this.queryFormat = function(url){
        var reg = new RegExp("(\\{.*?\\})");
        var u = url.replace(reg,function(q){
            return encodeURIComponent(q);
        });

        return u;
    }
    /**
     *
     * @param n1
     * @param n2
     * @returns {number}
     */
    this.random = function(n1,n2){
        var rand = Math.round(Math.random() * (Math.max(n1,n2)-Math.min(n1,n2) + 1));
        if(rand==0)
           return Main.random(n1,n2);
        return rand;
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
        //console.log(url);
        url = Main.queryFormat(url);
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