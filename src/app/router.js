export class Router {
    static run(app) {
        const routes = ["", "home", "order-pizza", "admin"];
        const route = location.hash ? location.hash.substr(1) : "home";
        const routeExists = routes.includes(route);

        if(routeExists) app.goTo(route);
        else {
            location.hash = "home";
            app.goTo();
        };
    }
}
