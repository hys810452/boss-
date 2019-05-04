const index = new Vue({
    el: "#index",
    data: {
        cartegories: []
    },
    created: () => {
        // const that = this;
        // 首页分类接口
        fetch("http://127.0.0.1:5500/MyProject/BossDemp/api/test/index.json").then((res) => {
            return res.json();
        }).then((data) => {
            index.cartegories = data;
            // that.cartegories = data;
        });
    }
});