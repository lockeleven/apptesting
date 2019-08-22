"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
class NewsPage extends tabris_1.Page {
    constructor(properties) {
        super();
        this.set(Object.assign({ title: 'News' }, properties)).append(JSX.createElement(tabris_1.TextView, { center: true }, "No news yet!"));
    }
}
exports.NewsPage = NewsPage;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3c1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTmV3c1BhZ2UuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBQ3RDLE1BQWEsUUFBUyxTQUFRLGFBQUk7SUFDbEMsWUFBWSxVQUFVO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsaUJBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQy9DLGtCQUFDLGlCQUFRLElBQUMsTUFBTSx5QkFBd0IsQ0FDdkMsQ0FBQztJQUNGLENBQUM7Q0FDQTtBQVBELDRCQU9DO0FBQUEsQ0FBQyJ9