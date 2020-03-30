//
Vue.filter('cap', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function(loc) { return loc.toUpperCase() })
})
new Vue({
    el: '#app',
    data: {
        lg: '',
        ps: '',
        rps: ''
    }
})