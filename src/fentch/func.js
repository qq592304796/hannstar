import axios from "axios";
import Qs from 'qs'
var token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJNRVJDSEFOVCIsImp0aSI6IkIyMDE3MDQxOTE1NDQiLCJzdWIiOiIxMTExMTExMTExMSIsImF1ZCI6IjEwMDAiLCJleHAiOjE0OTM5NDk2NDl9.EElVDzK7F4aq7HnbXSLQusA-ScPraF8Rl5g2abupNh8Gyy3ZVaMsHOI537wN-oHzXrRqaFxBrUx5xCbMzgmyYw"
axios.defaults.headers['authorization'] = token
export default {
    ajaxGet (api,param, cb) {
        axios.get(api,{
          params:param
        })
            .then(cb)
            .catch(err => {
                console.log(err);
            })
    },
    ajaxPost (api, post,param, cb) {
        axios.post(api, post,{
          params:param
        })
            .then(cb)
            .catch(err => {
                console.log(err);
            })
    }
}