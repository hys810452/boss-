const list = new Vue({
    el: "#list",
    data: {
        filters: [],
        jobs: []
    },
    created: () => {
        // 条件查询数据接口
        fetch("http://127.0.0.1:5501/MyProject/BossDemp/api/test/filters.json").then((res) => {
            return res.json();
        }).then((data) => {
            list.filters = data;
        });
        // 列表内容数据接口
        fetch("http://127.0.0.1:5501/MyProject/BossDemp/api/test/jobs.json").then((res) => {
            return res.json();
        }).then((data) => {
            list.jobs = data;
        });
    }
});