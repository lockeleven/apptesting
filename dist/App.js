"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
//import {NewsPage} from './pages/NewsPage';
// Create a full-size navigation view and add a page to it
tabris_1.contentView.append(JSX.createElement(tabris_1.NavigationView, { stretch: true },
    JSX.createElement(tabris_1.Page, { title: 'Main Page' },
        JSX.createElement(tabris_1.Button, { center: true, onSelect: () => openNewsPage() }, "Open news page"))));
function openNewsPage() {
    $(tabris_1.NavigationView).only().append(
    //<NewsPage />
    );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBZ0U7QUFDaEUsNENBQTRDO0FBQzVDLDBEQUEwRDtBQUMxRCxvQkFBVyxDQUFDLE1BQU0sQ0FDbEIsa0JBQUMsdUJBQWMsSUFBQyxPQUFPO0lBQ3ZCLGtCQUFDLGFBQUksSUFBQyxLQUFLLEVBQUMsV0FBVztRQUN2QixrQkFBQyxlQUFNLElBQUMsTUFBTSxRQUFDLFFBQVEsRUFDdkIsR0FBRyxFQUFFLENBQUMsWUFBWSxFQUFFLHFCQUF5QixDQUN0QyxDQUNVLENBQ2hCLENBQUE7QUFDRCxTQUFTLFlBQVk7SUFDckIsQ0FBQyxDQUFDLHVCQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNO0lBQy9CLGNBQWM7S0FDYixDQUFDO0FBQ0YsQ0FBQyJ9