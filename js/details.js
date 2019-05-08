const details = new Vue({
    el: "#details",
    data: {
        job: {}
    },
    created: function() {
        // const that = this;
        fetch("http://127.0.0.1:5500/MyProject/BossDemp/api/test/details.json").then(function(res) {
            return res.json();
        }).then(function(data) {
            details.job = data;
            console.log(data);
        });
    }
});