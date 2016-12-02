import './dependencies'

export function configure(aurelia) {

 let materialize = 'materialize-css'

 return System.import(materialize).then(() => {
   aurelia.use
     .standardConfiguration()
     .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() )
     .plugin('aurelia-notification', config => {
        config.configure({
          translate: false,  
          notifications: {
            'success': 'humane-libnotify-success',
            'error': 'humane-libnotify-error',
            'info': 'humane-libnotify-info'
          }
        })
     })
   return aurelia.start().then(a => a.setRoot());
 })
}