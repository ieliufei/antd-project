export default {
    plugins:[
       [ "umi-plugin-react",{
            antd: true,
            dva: true
       }]
    ],
    routes:[
        {
            path: "/",
            component: "./HelloWorld"
        }
    ]
}