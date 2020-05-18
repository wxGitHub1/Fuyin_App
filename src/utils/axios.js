import axios from 'axios';
import qs from "qs"
import { baseUrl } from "./env"
import { Toast, Dialog } from 'vant';

var http = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
    baseURL: '',
})

http.interceptors.request.use(config => {
    config.headers['token'] = localStorage.getItem("token") || '' // 请求头带上token
    return config;
}, error => {
    return Promise.reject(error);
})

http.interceptors.response.use(response => {
    if (response.data && response.data.errorCode == 401) { // 401, token失效
        //Token无效
        Dialog.alert({
            title: "错误",
            message: "登录失效",
        }).then(() => {
            //回调Android
            window.sys.tokenFail()
        })

    }
    return response
}, error => {
    return Promise.reject(error);
});

http.adornUrl = (url) => {
    return baseUrl + url;
}


/**
 * 封装请求
 */
http.methods = {
    base(url, data, method = "GET", contentType = 'form') {
        return new Promise((recover, reject) => {
            http({
                url: http.adornUrl(url),
                method,
                data: contentType == "json" ? data : qs.stringify(data),
                params: method == "GET" ? data : undefined,
                headers: {
                    "Content-Type": contentType == "form" ? 'application/x-www-form-urlencoded' : "application/json"
                }
            }).then(({ data }) => {
                if (data.errorCode == 0) {
                    recover(data.result)
                } else {
                    reject(data.errorMessage);
                    Toast.fail(data.errorMessage);
                }
            })
        });
    },
    get(url, params) {
        return this.base(url, params);
    },
    post(url, params) {
        return this.base(url, params, "POST");
    },
    postBody(url, data) {
        return this.base(url, data, "POST", 'json');
    }
}

export default http