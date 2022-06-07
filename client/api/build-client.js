import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // So, we cannot call /api/... directly because it will end up inside this pod
    // but, we need to access some specific service
    // there are 2 solutions:
    // 1) Point to some specific service (for ex. http://auth-srv/...), which is bad if we have to point to other services
    // 2) Point to ingress-ngnx directly and it will then route us to specific pod and service
    return axios.create({
      baseURL:
        // This is an example of cross-namespace communication
        // All our pods and services are created under 'default' namespace
        // while 'ingress-nginx-controller' service is under 'ingress-nginx' namespace
        // to reach a service in different namespace we have to write 'http://SERVICE_NAME.NAMESPACE_NAME.svc.cluster.local'
        // we can also create External Name Service in kubernetees to remap this name to smth more readable
        // but, for the sake of learning and transparency we won't do that
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
