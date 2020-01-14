function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAcademiccalendarCreateAdminAcademiccalendarCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Create New Holidy/Event/Activity</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-academiccalendar']\">Academic Calendar Management</a>\n                </li>\n                <li>Create New Holidy/Event/Activity</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Type *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Type *</option>\n                                        <option value=\"1\">Holiday</option>\n                                        <option value=\"2\">First Half Holiday</option>\n                                        <option value=\"3\">Second Half Holiday</option>\n                                        <option value=\"4\">Event</option>\n                                        <option value=\"5\">Meeting</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>For *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select For *</option>\n                                        <option value=\"1\">Student</option>\n                                        <option value=\"2\">Staff</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Start Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>End Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Send Notification *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select *</option>\n                                        <option value=\"1\">Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <input type=\"text\" placeholder=\"Enter Exam Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-6 col-12 form-group\">\n                                    <label>Description</label>\n                                    <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAcademiccalendarFullcalendarAdminAcademiccalendarFullcalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Acadendar Calendar</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-academiccalendar']\">Academic Calendar Management</a>\n                </li>\n                <li>Acadendar Calendar</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Type *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Type *</option>\n                                        <option value=\"1\">Holiday</option>\n                                        <option value=\"2\">First Half Holiday</option>\n                                        <option value=\"3\">Second Half Holiday</option>\n                                        <option value=\"4\">Event</option>\n                                        <option value=\"5\">Meeting</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>For *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select For *</option>\n                                        <option value=\"1\">Student</option>\n                                        <option value=\"2\">Staff</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Start Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>End Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <p class=\"text-center\">Calendar View comes here</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAcademiccalendarAdminAcademiccalendarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Academic Calendar Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>Academic Calendar</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-academiccalendar-fullcalendar']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Acadendar Calendar</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-academiccalendar-create']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Create Calendar</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAttendanceAttendanceanalysisAdminAttendanceAttendanceanalysisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Attendance Analysis</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-attendance']\">Attendance Management</a>\n                </li>\n                <li>Attendance Analysis</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Start Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select End Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Subject </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Subject *</option>\n                                        <option value=\"all\">All</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Search</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive text-center\">\n                            <p>Graph comes here</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAttendanceLeaveapplicationAdminAttendanceLeaveapplicationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Leave Applications</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-attendance']\">Attendance Management</a>\n                </li>\n                <li>Leave Applications</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Start Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select End Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Subject </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Search</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table bs-table table-striped table-bordered text-nowrap\">\n                                <thead>\n                                    <tr>\n                                        <th>Roll No.</th>\n                                        <th>Students</th>\n                                        <th>Date</th>\n                                        <th>Reason</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>101</td>\n                                        <td>Pankaj Pede</td>\n                                        <td>28-12-2019</td>\n                                        <td>Health Problem</td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td>Pankaj Pede</td>\n                                        <td>28-12-2019</td>\n                                        <td>Health Problem</td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td>Pankaj Pede</td>\n                                        <td>28-12-2019</td>\n                                        <td>Health Problem</td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td>Pankaj Pede</td>\n                                        <td>28-12-2019</td>\n                                        <td>Health Problem</td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td>Pankaj Pede</td>\n                                        <td>28-12-2019</td>\n                                        <td>Health Problem</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAttendanceNewattendanceAdminAttendanceNewattendanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>New Attendance</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-attendance']\">Attendance Management</a>\n                </li>\n                <li>New Attendance</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Subject </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Search</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table bs-table table-striped table-bordered text-nowrap\">\n                                <thead>\n                                    <tr>\n                                        <th>Roll No.</th>\n                                        <th>Students</th>\n                                        <th class=\"text-left\">Present</th>\n                                        <th class=\"text-left\">Leave</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>101</td>\n                                        <td class=\"text-left\">Pankaj Pede</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>102</td>\n                                        <td class=\"text-left\">Swapnil Sangale</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Swapnil\" checked>\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>103</td>\n                                        <td class=\"text-left\">Sagar Mahajan</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td class=\"text-left\">Pankaj Pede</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>102</td>\n                                        <td class=\"text-left\">Swapnil Sangale</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>103</td>\n                                        <td class=\"text-left\">Sagar Mahajan</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td class=\"text-left\">Pankaj Pede</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>102</td>\n                                        <td class=\"text-left\">Swapnil Sangale</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>103</td>\n                                        <td class=\"text-left\">Sagar Mahajan</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>101</td>\n                                        <td class=\"text-left\">Pankaj Pede</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"pankaj\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>102</td>\n                                        <td class=\"text-left\">Swapnil Sangale</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Swapnil\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>103</td>\n                                        <td class=\"text-left\">Sagar Mahajan</td>\n                                        <td>\n                                            <label class=\"checkbox-container\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                        <td>\n                                            <label class=\"checkbox-container warning\">\n                                                <input type=\"radio\" name=\"Sagar\">\n                                                <span class=\"checkmark rounded-circle\"></span>\n                                            </label>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-12 form-group p-0\">\n                            <button class=\"btn-fill-lg bg-blue-dark mr-3\">Submit</button>\n                            <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance/admin-attendance.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance/admin-attendance.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAttendanceAdminAttendanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Admin Configuration</h3>\n            <ul>\n                <li>Configuration</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-attendance-new']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar5 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">New Attendace</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-attendance-leaveanalysis']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar5 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Leave Application</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-attendance-analysis']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar1 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Attendace Analysis</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-chat/admin-chat.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-chat/admin-chat.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminChatAdminChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Chat Management</h3>\n            <ul>\n                <li><a [routerLink]=\"['/super-dashboard']\">Dashboard</a></li>\n                <li>Chat Management</li>\n            </ul>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        Chat Comes here\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationAboutschoolAdminConfigurationAboutschoolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Admin Configuration</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>About School</li>\n            </ul>\n        </div>\n\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- About School -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School Full Name *</label>\n                                    <input type=\"text\"  value=\"Modern Kids School\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School Short Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter School Short Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Logo</label>\n                                    <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Principal *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Type *</option>\n                                        <option value=\"1\" selected>Anand Singh</option>\n                                        <option value=\"2\">Leena Chauvan</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin User Name *</label>\n                                    <input type=\"text\" value=\"Pankaj Pede\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin Contact No. </label>\n                                    <input type=\"number\" value=\"9561311757\"  class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin User Email</label>\n                                    <input type=\"email\" value=\"pede.pankaj@gmail.com\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person Name *</label>\n                                    <input type=\"text\" value=\"Swapnil Sangale\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person No. *</label>\n                                    <input type=\"number\" value=\"7588611478\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person Email</label>\n                                    <input type=\"email\" value=\"pede.pankaj@gmail.com\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School Contact Number</label>\n                                    <input type=\"text\" placeholder=\"Enter School Contact Number\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Facebook URL</label>\n                                    <input type=\"url\" placeholder=\"Enter Facebook URL\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Google Review url</label>\n                                    <input type=\"url\" placeholder=\"Enter Facebook URL\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School timing</label>\n                                    <input type=\"time\" placeholder=\"Enter Facebook URL\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                    <label>Address</label>\n                                    <textarea placeholder=\"Enter School Address\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                    <label>About School</label>\n                                    <textarea placeholder=\"Enter About School\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-12 col-lg-6 col-12 form-group\">\n                                    <label>School weekly days *</label>\n                                    <div class=\"row m-0\">\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Mon\">Mon\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Tue\">Tue\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Wed\">Wed\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Thu\">Thu\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Fri\">Fri\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Sat\">Sat\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-2\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Sun\">Sun\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <a class=\"btn-fill-lg bg-blue-dark\">Add</a>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationApplicationlabelAdminConfigurationApplicationlabelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Application Label</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Application Label</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Assign Subject -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Label</th>\n                                                      <th>Used Name</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>Department</td>\n                                                      <td>Medium</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\" data-toggle=\"modal\" data-target=\"#editLabel\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>Class</td>\n                                                      <td>Standard</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\" data-toggle=\"modal\" data-target=\"#editLabel\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>Division</td>\n                                                      <td>Sub-Standard</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\" data-toggle=\"modal\" data-target=\"#editLabel\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                          </form>\n                    </div>\n                  </div>\n            </div>\n        </div>\n        \n        <div class=\"modal editLabel fade\" id=\"editLabel\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Edit Label</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"col-12 form-group p-0\">\n                                <input type=\"text\" placeholder=\"Enter Label Name\" class=\"form-control\">\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill-lg bg-blue-dark\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Update</button>\n                        <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationAssignsubjectAdminConfigurationAssignsubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Assign Subject</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Assign Subject</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Assign Subject -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Department</th>\n                                                      <th>Class</th>\n                                                      <th>Division</th>\n                                                      <th>Subject</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>Engineering</td>\n                                                      <td>Mechanical</td>\n                                                      <td>First Year</td>\n                                                      <td>M-3</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>MBA</td>\n                                                      <td>1st Year</td>\n                                                      <td>NA</td>\n                                                      <td>Accounts</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                            \n                            <div class=\"row mt-5\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                              <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                  <label>Division Name *</label>\n                                  <select class=\"form-control\">\n                                    <option value=\"\">Select Division Name *</option>\n                                    <option value=\"1\">NA</option>\n                                </select>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                  <label>Subject Name *</label>\n                                  <input type=\"text\" placeholder=\"Subject Name\" class=\"form-control\">\n                              </div>\n                              <div class=\"col-12 form-group mg-t-8\">\n                                  <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                  <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                              </div>\n                          </div>\n                          </form>\n                    </div>\n                  </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationAssignteacherAdminConfigurationAssignteacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Assign Teacher</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Assign Teacher</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Assign Teacher -->\n                <div class=\"card\"><div class=\"card-body\">\n                    <form class=\"new-added-form\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"table-box-wrap\">\n                                  <div class=\"table-responsive expenses-table-box\">\n                                      <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                          <thead>\n                                              <tr>\n                                                  <th>Department</th>\n                                                  <th>Class</th>\n                                                  <th>Division</th>\n                                                  <th>Subject</th>\n                                                  <th>Teacher Name</th>\n                                                  <th>Action</th>\n                                              </tr>\n                                          </thead>\n                                          <tbody>\n                                              <tr>\n                                                  <td>Engineering</td>\n                                                  <td>Mechanical</td>\n                                                  <td>First Year</td>\n                                                  <td>M-3</td>\n                                                  <td>Mr. Birajdar</td>\n                                                  <td>\n                                                      <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                      <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                  </td>\n                                              </tr>\n                                              <tr>\n                                                  <td>MBA</td>\n                                                  <td>1st Year</td>\n                                                  <td>NA</td>\n                                                  <td>Accounts</td>\n                                                  <td>Mr. Ajit Singh</td>\n                                                  <td>\n                                                      <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                      <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                  </td>\n                                              </tr>\n                                          </tbody>\n                                      </table>\n                                  </div>\n                              </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"row mt-5\">\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Select Department *</label>\n                                <select class=\"form-control\">\n                                    <option value=\"\">Select Department *</option>\n                                    <option value=\"1\">Engineering</option>\n                                    <option value=\"2\">MBA</option>\n                                </select>\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Select Class *</label>\n                                <select class=\"form-control\">\n                                    <option value=\"\">Select Department *</option>\n                                    <option value=\"1\">Mechnical</option>\n                                    <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                </select>\n                            </div>\n                          <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                              <label>Division Name *</label>\n                              <select class=\"form-control\">\n                                <option value=\"1\">NA</option>\n                            </select>\n                          </div>\n                          <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                              <label>Subject *</label>\n                              <select class=\"form-control\">\n                                  <option value=\"\">Select Subject *</option>\n                                  <option value=\"1\">Math</option>\n                                  <option value=\"2\">History</option>\n                              </select>\n                          </div>\n                          <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                              <label>Teacher *</label>\n                              <select class=\"form-control\">\n                                  <option value=\"\">Select Teacher *</option>\n                                  <option value=\"1\">Teacher 1</option>\n                                  <option value=\"2\">Teacher 2</option>\n                              </select>\n                          </div>\n                          <div class=\"col-12 form-group mg-t-8\">\n                              <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                              <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                          </div>\n                      </div>\n                      </form>\n                </div>\n                  </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationAttendanceeditingAdminConfigurationAttendanceeditingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Attendance Editing</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Attendance Editing</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Attendance Editing -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                \n                                <div class=\"col-xl-12 col-lg-6 col-12 form-group\">\n                                    <label>School weekly days *</label>\n                                    <div class=\"row m-0\">\n                                        <div class=\"form-check col-6\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Mon\">Allow To edit Past Attendance\n                                            </label>\n                                        </div>\n                                        <div class=\"form-check col-6\">\n                                            <label class=\"form-check-label\">\n                                                <input type=\"checkbox\" class=\"form-check-input\" value=\"Tue\">Allow To edit Future Attendance\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationFeesAdminConfigurationFeesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Fees</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Fees</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Fees -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Department</th>\n                                                      <th>Class</th>\n                                                      <th>Division</th>\n                                                      <th>Fees</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>Engineering</td>\n                                                      <td>Mechanical</td>\n                                                      <td>First Year</td>\n                                                      <td>60,000</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>MBA</td>\n                                                      <td>1st Year</td>\n                                                      <td>NA</td>\n                                                      <td>23,000</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                            \n                            <div class=\"row mt-5\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                              <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                  <label>Division Name *</label>\n                                  <select class=\"form-control\">\n                                    <option value=\"1\">NA</option>\n                                </select>\n                              </div>\n                              <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                  <label>Fees *</label>\n                                  <input type=\"text\" placeholder=\"Enter Fees\" class=\"form-control\">\n                              </div>\n                              <div class=\"col-12 form-group mg-t-8\">\n                                  <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                  <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                              </div>\n                          </div>\n                          </form>\n                    </div>\n                  </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationHomesliderAdminConfigurationHomesliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Home Slider</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Home Slider</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Home Slider -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Sr. No.</th>\n                                                      <th>Slider Image</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>1</td>\n                                                      <td>\n                                                          <img src=\"./assets/images/home-slider/slide-1.jpg\" width=\"200\" />\n                                                      </td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>2</td>\n                                                      <td>\n                                                          <img src=\"./assets/images/home-slider/slide-2.jpg\" width=\"200\" />\n                                                      </td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                            \n                            <div class=\"row mt-5\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Slide Number *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectNumber *</option>\n                                        <option value=\"1\">1</option>\n                                        <option value=\"2\">2</option>\n                                        <option value=\"3\">3</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Photo</label>\n                                    <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                              <div class=\"col-12 form-group mg-t-8\">\n                                  <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                  <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                              </div>\n                          </div>\n                          </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationInstituteclassAdminConfigurationInstituteclassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Institute Class</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Institute Class</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Institute Class -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Department Name</th>\n                                                      <th>Class Name</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>Engineering</td>\n                                                      <td>Mechnical Engineering</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Electronics & Telecommunication Engineering</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Information & Technology Engineering</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>MBA</td>\n                                                    <td>1st Year</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>MBA</td>\n                                                    <td>2nd Year</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                              <div class=\"row mt-5\">\n                                    <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                        <label>Select Department *</label>\n                                        <select class=\"form-control\">\n                                            <option value=\"\">Select Department *</option>\n                                            <option value=\"1\">Engineering</option>\n                                            <option value=\"2\">MBA</option>\n                                        </select>\n                                    </div>\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Class Name *</label>\n                                      <input type=\"text\" placeholder=\"Enter Class Name\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Photo</label>\n                                      <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                      <span class=\"file-upload-span\">Click to upload</span>\n                                  </div>\n                                  <div class=\"col-xl-12 col-12 form-group\">\n                                        <label>Description</label>\n                                        <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                  </div>\n                                  <div class=\"col-12 form-group mg-t-8\">\n                                      <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                      <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                  </div>\n                              </div>\n                          </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationInstitutecommitteeAdminConfigurationInstitutecommitteeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Institute Committee</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Institute Committee</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Institute Committee -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                          <div class=\"row\">\n                              <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Member Type</th>\n                                                    <th>Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Chairman</td>\n                                                    <td>Mr. Kiran Khanna</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Principal</td>\n                                                    <td>Dr. Anand Singh</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                              </div>\n                          </div>\n                            <div class=\"row mt-5\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Member Type *</label>\n                                    <input type=\"text\" placeholder=\"Enter Member Type\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectTitle *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Photo</label>\n                                    <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                      <label>Description</label>\n                                      <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                  </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationInstitutedepartmentAdminConfigurationInstitutedepartmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Institute Department</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Institute Department</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Institute Department -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                          <div class=\"row\">\n                              <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                              </div>\n                          </div>\n                            <div class=\"row mt-5\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Department Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Photo</label>\n                                    <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                      <label>Description</label>\n                                      <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationInstitutedivisionAdminConfigurationInstitutedivisionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Institute Division</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Institute Division</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Institute Division -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Department Name</th>\n                                                      <th>Class Name</th>\n                                                      <th>Division Name</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>Engineering</td>\n                                                      <td>Mechnical Engineering</td>\n                                                      <td>First Year</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mechnical Engineering</td>\n                                                    <td>Second Year</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                  <td>Engineering</td>\n                                                  <td>Mechnical Engineering</td>\n                                                  <td>Third Year</td>\n                                                  <td>\n                                                      <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                      <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                  </td>\n                                              </tr>\n                                              <tr>\n                                                <td>Engineering</td>\n                                                <td>Mechnical Engineering</td>\n                                                <td>Final Year</td>\n                                                <td>\n                                                    <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                    <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                </td>\n                                            </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                              <div class=\"row mt-5\">\n                                    <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                        <label>Select Department *</label>\n                                        <select class=\"form-control\">\n                                            <option value=\"\">Select Department *</option>\n                                            <option value=\"1\">Engineering</option>\n                                            <option value=\"2\">MBA</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                        <label>Select Class *</label>\n                                        <select class=\"form-control\">\n                                            <option value=\"\">SelectClass *</option>\n                                            <option value=\"1\">Mechnical</option>\n                                            <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                        </select>\n                                    </div>\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Division Name *</label>\n                                      <input type=\"text\" placeholder=\"Enter Division Name\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Max Student No. *</label>\n                                      <input type=\"number\" placeholder=\"Enter Max Student No.\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Photo</label>\n                                      <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                      <span class=\"file-upload-span\">Click to upload</span>\n                                  </div>\n                                  <div class=\"col-xl-12 col-12 form-group\">\n                                        <label>Description</label>\n                                        <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                  </div>\n                                  <div class=\"col-12 form-group mg-t-8\">\n                                      <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                      <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                  </div>\n                              </div>\n                          </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationSecondaryadminAdminConfigurationSecondaryadminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Secondary Admin</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Secondary Admin</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Name *</label>\n                                    <input type=\"text\" value=\"Pankaj Pede\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" value=\"Admin Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" value=\"Admin Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" value=\"Admin Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No.* </label>\n                                    <input type=\"number\" value=\"9561311757\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-dashboard']\" class=\"btn-fill-lg bg-blue-dark\">Save & Next</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationSubjectmanagementAdminConfigurationSubjectmanagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Subject Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>Subject Management</li>\n            </ul>\n        </div>\n\n                    \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Subject Management -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                  <div class=\"table-box-wrap\">\n                                      <div class=\"table-responsive expenses-table-box\">\n                                          <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                              <thead>\n                                                  <tr>\n                                                      <th>Subject Name</th>\n                                                      <th>Action</th>\n                                                  </tr>\n                                              </thead>\n                                              <tbody>\n                                                  <tr>\n                                                      <td>Mathematics</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>English</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                                  <tr>\n                                                      <td>History</td>\n                                                      <td>\n                                                          <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                          <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                      </td>\n                                                  </tr>\n                                              </tbody>\n                                          </table>\n                                      </div>\n                                  </div>\n                                </div>\n                            </div>\n                              <div class=\"row mt-5\">\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Subject Name *</label>\n                                      <input type=\"text\" placeholder=\"Enter School Full Name\" class=\"form-control\">\n                                  </div>\n                                  <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                      <label>Photo</label>\n                                      <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                      <span class=\"file-upload-span\">Click to upload</span>\n                                  </div>\n                                  <div class=\"col-xl-12 col-12 form-group\">\n                                        <label>Description</label>\n                                        <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                  </div>\n                                  <div class=\"col-12 form-group mg-t-8\">\n                                      <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                      <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                  </div>\n                              </div>\n                          </form>\n                    </div>\n                  </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration/admin-configuration.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration/admin-configuration.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfigurationAdminConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Admin Configuration</h3>\n            <ul>\n                <li>Configuration</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-aboutschool']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-library2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">About School</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-institutecommittee']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-users text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Institute Committee</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-institutedepartment']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-building text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Institute Department</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-instituteclass']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-building text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Institute Class</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-institutedivision']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-building text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Institute Division</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-subjectmanagement']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-book-closed text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Subject Management</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-assignsubject']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-notebook4 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Assign Subject</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-assignteacher']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Assign Teacher</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-fees']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-bag-dollar text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Fees</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-homeslider']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-video-player1 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Home Slider</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-secondaryadmin']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Secondary Admin</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-attendanceediting']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-clipboard-pencil text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Attendacne Editing</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-configuration-applicationlabel']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-tag text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Application labels</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfirmadmindetailsAdminConfirmadmindetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 col-md-12 text-center\">\n            <div class=\"breadcrumbs-area pt-5\">\n                <h3>Confirm Admin Details</h3>\n            </div>\n        </div>\n    </div>\n    <!-- User Grid -->\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card dashboard-card-eleven\">\n                <div class=\"card-body\">\n                    <form class=\"new-added-form\">\n                        <div class=\"row\">\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>School Full Name *</label>\n                                <input type=\"text\" value=\"Modern Kids School\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>School Short Name *</label>\n                                <input type=\"text\" value=\"Modern Kids School\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Admin Email *</label>\n                                <input type=\"email\" value=\"Admin Email\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Admin Contact No.* </label>\n                                <input type=\"number\" value=\"9561311757\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Admin Name *</label>\n                                <input type=\"text\" value=\"Pankaj Pede\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Contact Person Name </label>\n                                <input type=\"text\" placeholder=\"Contact Person Name\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Contact Contact No.</label>\n                                <input type=\"number\" placeholder=\"Contact Contact No.\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                <label>Contact Person Email</label>\n                                <input type=\"email\" placeholder=\"Contact Person Email\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-12 form-group mg-t-8\">\n                                <button [routerLink]=\"['/admin-dashboard']\" class=\"btn-fill-lg bg-blue-dark\">Save & Next</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n        ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminConfirmloginAdminConfirmloginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- Login Page Start Here -->\n  <div class=\"login-page-wrap\">\n    <div class=\"login-page-content\">\n        <div class=\"login-box\">\n            <div class=\"item-logo\">\n                <img src=\"./assets/images/logo2.png\" alt=\"logo\">\n            </div>\n            <form action=\"#\" class=\"login-form\">\n                <div class=\"form-group\">\n                    <label>Enter Password</label>\n                    <input type=\"password\" placeholder=\"Enter usrename\" class=\"form-control\">\n                    <i class=\"far fa-lock\"></i>\n                </div>\n                <div class=\"form-group\">\n                    <label>Confirm Password</label>\n                    <input type=\"password\" placeholder=\"Enter password\" class=\"form-control\">\n                    <i class=\"fas fa-lock\"></i>\n                </div>\n                <!-- <div class=\"form-group d-flex align-items-center justify-content-between\">\n                    <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"remember-me\">\n                        <label for=\"remember-me\" class=\"form-check-label\">Remember Me</label>\n                    </div>\n                    <a href=\"#\" class=\"forgot-btn\">Forgot Password?</a>\n                </div> -->\n                <div class=\"form-group\">\n                    <a [routerLink]=\"['/admin-confirmadmindetails']\" class=\"login-btn\">Set Password</a>\n                </div>\n                \n        <!-- <div class=\"sign-up\">Don't have an account ? <a href=\"#\">Signup now!</a></div> -->\n            </form>\n        </div>\n    </div>\n</div>\n<!-- Login Page End Here -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Admin Dashboard</h3>\n            <ul>\n                <li>Dashboard</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-green \">\n                                <i class=\"icon icon-building text-green\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Departments</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"2\">2</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-green \">\n                                <i class=\"icon icon-building text-green\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Classrooms</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"14\">14</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-blue\">\n                                <i class=\"icon icon-user-lock text-blue\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Teachers</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"21\">21</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-blue\">\n                                <i class=\"icon icon-user-lock text-blue\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Parents</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"129\">129</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow\">\n                                <i class=\"icon icon-file-3 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Pending Exams</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"07\">07</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-red\">\n                                <i class=\"icon icon-bag-dollar text-red\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Pending Fees</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"201011\">2,01,011</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminElibraryAddAdminElibraryAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Add New Document</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-elibrary']\">e-Library Management</a>\n                </li>\n                <li>Add New Document</li>\n            </ul>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>For </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select For *</option>\n                                        <option value=\"1\">Student</option>\n                                        <option value=\"2\">Staff</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass </option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Division </option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Subject </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass </option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <input type=\"text\" placeholder=\"Enter Exam Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>File *</label>\n                                    <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to Upload</span>\n                                </div>\n                                <div class=\"col-xl-6 col-12 form-group\">\n                                    <label>Description</label>\n                                    <textarea placeholder=\"Enter Description\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminElibraryViewAdminElibraryViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>View Document</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-elibrary']\">e-Library Management</a>\n                </li>\n                <li>View Document</li>\n            </ul>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam *</option>\n                                        <option value=\"1\">Exam 1</option>\n                                        <option value=\"2\">Exam 2</option>\n                                        <option value=\"3\">Exam 3</option>\n                                        <option value=\"4\">Exam 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Search</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table bs-table table-striped table-bordered text-nowrap\">\n                                <thead>\n                                    <tr>\n                                        <th>Exam Name</th>\n                                        <th>Department</th>\n                                        <th>Class</th>\n                                        <th>Division</th>\n                                        <th>Subject</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Exam 1</td>\n                                        <td>Engineering</td>\n                                        <td>Mechnical</td>\n                                        <td>F.E.</td>\n                                        <td>M-I</td>\n                                        <td>\n                                            <a class=\"text-success mr-3\"><i class=\"icon icon-download2\"></i></a>\n                                            <a class=\"text-warning mr-3\" [routerLink]=\"['/admin-exam-editexam']\"><i class=\"icon icon-pencil1\"></i></a>\n                                            <a class=\"text-danger\"><i class=\"icon icon-trash2\"></i></a>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Exam 2</td>\n                                        <td>Engineering</td>\n                                        <td>Mechnical</td>\n                                        <td>F.E.</td>\n                                        <td>M-II</td>\n                                        <td>\n                                            <a class=\"text-success mr-3\"><i class=\"icon icon-download2\"></i></a>\n                                            <a class=\"text-warning mr-3\" [routerLink]=\"['/admin-exam-editexam']\"><i class=\"icon icon-pencil1\"></i></a>\n                                            <a class=\"text-danger\"><i class=\"icon icon-trash2\"></i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Edit Exam</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Division *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam *</option>\n                                        <option value=\"1\">Exam 1</option>\n                                        <option value=\"2\">Exam 2</option>\n                                        <option value=\"3\">Exam 3</option>\n                                        <option value=\"4\">Exam 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Total Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Total Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Passing Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Date</label>\n                                    <input type=\"date\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam From Time</label>\n                                    <input type=\"Time\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam End Time</label>\n                                    <input type=\"Time\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Status *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Status *</option>\n                                        <option value=\"1\">Publish Now</option>\n                                        <option value=\"2\">Unpublished</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                    <label>Exam Desscription</label>\n                                    <textarea placeholder=\"Enter Desscription\"  class=\"form-control\"></textarea>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill-lg bg-blue-dark\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Update</button>\n                        <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary/admin-elibrary.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary/admin-elibrary.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminElibraryAdminElibraryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>e-Library Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>e-Library Management</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-elibrary-view']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">View <br />e-Library</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-elibrary-add']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Add New Document</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExamEditexamAdminExamEditexamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Edit Exam</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam']\">Exam Management</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam-manage']\">Manage Exam</a>\n                </li>\n                <li>Edit Exam</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Division *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam *</option>\n                                        <option value=\"1\">Exam 1</option>\n                                        <option value=\"2\">Exam 2</option>\n                                        <option value=\"3\">Exam 3</option>\n                                        <option value=\"4\">Exam 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Total Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Total Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Passing Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Date</label>\n                                    <input type=\"date\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam From Time</label>\n                                    <input type=\"Time\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam End Time</label>\n                                    <input type=\"Time\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Status *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Status *</option>\n                                        <option value=\"1\">Publish Now</option>\n                                        <option value=\"2\">Unpublished</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                    <label>Exam Desscription</label>\n                                    <textarea placeholder=\"Enter Desscription\"  class=\"form-control\"></textarea>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExamEditresultAdminExamEditresultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Edit Result</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam']\">Exam Management</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam-manage']\">Manage Exam</a>\n                </li>\n                <li>Edit Result</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table bs-table table-striped table-bordered text-nowrap\">\n                                <thead>\n                                    <tr>\n                                        <th>Roll No.</th>\n                                        <th>Students</th>\n                                        <th class=\"text-left\">Obtained Marks</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>101</td>\n                                        <td class=\"text-left\">Pankaj Pede</td>\n                                        <td>\n                                            <div class=\"form-group\">\n                                                <input type=\"number\" placeholder=\"Enter Obtained Marks\" class=\"form-control\">\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>102</td>\n                                        <td class=\"text-left\">Swapnil Sangale</td>\n                                        <td>\n                                            <div class=\"form-group\">\n                                                <input type=\"number\" placeholder=\"Enter Obtained Marks\" class=\"form-control\">\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>103</td>\n                                        <td class=\"text-left\">Sagar Mahajan</td>\n                                        <td>\n                                            <div class=\"form-group\">\n                                                <input type=\"number\" placeholder=\"Enter Obtained Marks\" class=\"form-control\">\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-12 form-group p-0 text-center\">\n                            <button class=\"btn-fill-lg bg-blue-dark mr-3\">Submit</button>\n                            <button class=\"btn-fill-lg bg-blue-dark mr-3\">Bulk Upload Result</button>\n                            <button class=\"btn-fill-lg bg-blue-dark mr-3\">Report</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-manage/admin-exam-manage.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-manage/admin-exam-manage.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExamManageAdminExamManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Manage Exam</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam']\">Exam Management</a>\n                </li>\n                <li>Manage Exam</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam *</option>\n                                        <option value=\"1\">Exam 1</option>\n                                        <option value=\"2\">Exam 2</option>\n                                        <option value=\"3\">Exam 3</option>\n                                        <option value=\"4\">Exam 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Search</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table bs-table table-striped table-bordered text-nowrap\">\n                                <thead>\n                                    <tr>\n                                        <th>Exam Name</th>\n                                        <th>Department</th>\n                                        <th>Class</th>\n                                        <th>Division</th>\n                                        <th>Subject</th>\n                                        <th>Status</th>\n                                        <th>Date</th>\n                                        <th>Time</th>\n                                        <th>Total Marks</th>\n                                        <th>Passing marks</th>\n                                        <th>Result</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Exam 1</td>\n                                        <td>Engineering</td>\n                                        <td>Mechnical</td>\n                                        <td>F.E.</td>\n                                        <td>M-I</td>\n                                        <td>Unpublished</td>\n                                        <td>NA</td>\n                                        <td>NA</td>\n                                        <td>NA</td>\n                                        <td>NA</td>\n                                        <td>NA</td>\n                                        <td>\n                                            <a class=\"text-warning mr-3\" [routerLink]=\"['/admin-exam-editexam']\"><i class=\"icon icon-pencil1\"></i></a>\n                                            <a class=\"text-danger\"><i class=\"icon icon-trash2\"></i></a>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Exam 2</td>\n                                        <td>Engineering</td>\n                                        <td>Mechnical</td>\n                                        <td>F.E.</td>\n                                        <td>M-II</td>\n                                        <td>Published</td>\n                                        <td>29-01-2020</td>\n                                        <td>01:00 PM - 02:30 PM</td>\n                                        <td>100</td>\n                                        <td>40</td>\n                                        <td>\n                                            <a class=\"btn bg-blue-dark mr-3 text-white\" [routerLink]=\"['/admin-exam-editresult']\">Edit Marks</a>\n                                        </td>\n                                        <td>\n                                            <a class=\"text-warning mr-3\" [routerLink]=\"['/admin-exam-editexam']\"><i class=\"icon icon-pencil1\"></i></a>\n                                            <a class=\"text-danger\"><i class=\"icon icon-trash2\"></i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Edit Exam</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Division *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam *</option>\n                                        <option value=\"1\">Exam 1</option>\n                                        <option value=\"2\">Exam 2</option>\n                                        <option value=\"3\">Exam 3</option>\n                                        <option value=\"4\">Exam 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Total Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Total Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Passing Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam Date</label>\n                                    <input type=\"date\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam From Time</label>\n                                    <input type=\"Time\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Exam End Time</label>\n                                    <input type=\"Time\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-4 col-lg-6 col-12 form-group\">\n                                    <label>Status *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Status *</option>\n                                        <option value=\"1\">Publish Now</option>\n                                        <option value=\"2\">Unpublished</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-12 col-12 form-group\">\n                                    <label>Exam Desscription</label>\n                                    <textarea placeholder=\"Enter Desscription\"  class=\"form-control\"></textarea>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill-lg bg-blue-dark\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Update</button>\n                        <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-new/admin-exam-new.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-new/admin-exam-new.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExamNewAdminExamNewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Create New Exam</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam']\">Exam Management</a>\n                </li>\n                <li>Create New Exam</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Type *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam Type *</option>\n                                        <option value=\"1\">Planned</option>\n                                        <option value=\"2\">Surprise</option>\n                                        <option value=\"3\">Open book</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Exam Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Total Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Total Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Passing Marks *</label>\n                                    <input type=\"text\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-6 col-12 form-group\">\n                                    <label>Exam Desscription</label>\n                                    <textarea placeholder=\"Enter Desscription\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-report/admin-exam-report.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-report/admin-exam-report.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExamReportAdminExamReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Exam Report</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-exam']\">Exam Management</a>\n                </li>\n                <li>Exam Report</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam Name *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Exam *</option>\n                                        <option value=\"1\">Exam 1</option>\n                                        <option value=\"2\">Exam 2</option>\n                                        <option value=\"3\">Exam 3</option>\n                                        <option value=\"4\">Exam 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam From Date</label>\n                                    <input type=\"date\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Exam To Date</label>\n                                    <input type=\"date\" placeholder=\"Enter Passing Marks\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Search</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <p class=\"text-center\">Graphical & Grid Report comes here</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam/admin-exam.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam/admin-exam.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminExamAdminExamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Exam Scheduler</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>Exam Scheduler</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-exam-new']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">New Exam</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-exam-manage']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Manage Exam</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-exam-report']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Exam Report</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminFeesmanagementAnalysisAdminFeesmanagementAnalysisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Fees Analysis</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-feesmanagement']\">Fees Management</a>\n                </li>\n                <li>Fees Analysis</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Start Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select End Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Search</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive text-center\">\n                            <p>Graph comes here</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminFeesmanagementDetailsAdminFeesmanagementDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Fees Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-feesmanagement']\">Fees Management</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-feesmanagement-list']\">Fees List</a>\n                </li>\n                <li>Fees Details</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n                <div class=\"card dashboard-card-six\">\n                    <div class=\"card-body\">\n                        <div class=\"notice-box-wrap\">\n                            <div class=\"notice-list\">\n                                <div class=\"post-date bg-success\">No Pending</div>\n                                <h6 class=\"notice-title\">Last Paid 4,000</h6>\n                                <div class=\"entry-meta\">  Accountant - Mr. Mohan Patel / <span>12-12-2019</span></div>\n                            </div>\n                            <div class=\"notice-list\">\n                                <div class=\"post-date bg-warning\">4,000 Pending</div>\n                                <h6 class=\"notice-title\">Last Paid 10,000</h6>\n                                <div class=\"entry-meta\">  Admin - Mr. Mohan Patel / <span>12-10-2019</span></div>\n                            </div>\n                            <div class=\"notice-list\">\n                                <div class=\"post-date bg-warning\">14,000 Pending</div>\n                                <h6 class=\"notice-title\">Last Paid 6,000</h6>\n                                <div class=\"entry-meta\">  Class Teacher - Mr. Mohan Patel / <span>12-06-2019</span></div>\n                            </div>\n                        </div>\n                        <div class=\"col-12 mt-5 form-group p-0\">\n                            <button  class=\"btn-fill-lg bg-blue-dark mr-3\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Print Copy</button>\n                            <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\" data-toggle=\"modal\" data-target=\"#paymentModal\">Make New Payment</button>\n                            <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\" data-toggle=\"modal\" data-target=\"#sendReminderModal\">Send Reminder</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal paymentModal fade\" id=\"paymentModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">New Payment</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"col-12 form-group p-0\">\n                            <label>Payment Mode *</label>\n                            <select class=\"form-control\">\n                                <option value=\"\">Select Payment Mode *</option>\n                                <option value=\"1\">Online</option>\n                                <option value=\"2\">Cash</option>\n                            </select>\n                        </div>\n                        <div class=\"col-12 form-group p-0\">\n                            <label>Amount *</label>\n                            <input type=\"number\" placeholder=\"Enter Amount\" class=\"form-control\">\n                        </div>\n                        <div class=\"col-12 form-group p-0\">\n                            <label>Date *</label>\n                            <input type=\"date\" class=\"form-control\">\n                        </div>\n                        <div class=\"col-12 form-group p-0\">\n                            <label>Remark</label>\n                            <textarea placeholder=\"Enter Remark\"  class=\"form-control\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill-lg bg-blue-dark\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Add Payment</button>\n                        <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal sendReminderModal fade\" id=\"sendReminderModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Payment Reminder</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"col-12 form-group p-0\">\n                            <textarea class=\"form-control\" style=\"height: 100px;\">School Fees Due Date Reminder. Please remit payment for your child School payment as soon as possible.</textarea>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill-lg bg-blue-dark\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Send</button>\n                        <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminFeesmanagementListAdminFeesmanagementListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Fees Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-feesmanagement']\">Fees Management</a>\n                </li>\n                <li>Fees List</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division </label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Search</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table data-table text-nowrap\">\n                                <thead>\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Department</th>\n                                        <th>Class</th>\n                                        <th>Division</th>\n                                        <th>Total Fees</th>\n                                        <th>Pending Fees</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Pankaj Pede</td>\n                                        <td>Engineering</td>\n                                        <td>Mechanical Engineering</td>\n                                        <td>First Year</td>\n                                        <td>20,000</td>\n                                        <td>3,000</td>\n                                        <td>\n                                            <a class=\"text-warning mr-3\" [routerLink]=\"['/admin-feesmanagement-details']\"><i class=\"icon icon-pencil1\"></i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminFeesmanagementAdminFeesmanagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Fees Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>Fees Management</li>\n            </ul>\n        </div> \n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-feesmanagement-list']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-bag-dollar text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Fees Management</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-feesmanagement-analysis']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-4\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-bag-dollar text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-8\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Fees Analysis</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery-create/admin-gallery-create.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery-create/admin-gallery-create.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminGalleryCreateAdminGalleryCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>admin-gallery-create works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery-view/admin-gallery-view.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery-view/admin-gallery-view.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminGalleryViewAdminGalleryViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Gallery View</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-gallery']\">Gallery Management</a>\n                </li>\n                <li>Gallery View</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-4 col-sm-6 col-12 mb-4\" [routerLink]=\"['/admin-gallery-view']\" data-toggle=\"modal\" data-target=\"#albumModal\">\n                <div class=\"gallery-wrapper\">\n                    <div class=\"gallery-content mb-4\">\n                        <img src=\"./assets/images/gallery/album-1/images.jpg\">\n                    </div>\n                    <div class=\"gallery-header\">\n                        <h3 class=\"title mb-0\">New Year Celeration</h3>\n                        <p class=\"text-secondary mb-0\">23-01-2020</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-4 col-sm-6 col-12 mb-4\" [routerLink]=\"['/admin-gallery-view']\" data-toggle=\"modal\" data-target=\"#albumModal\">\n                <div class=\"gallery-wrapper\">\n                    <div class=\"gallery-content mb-4\">\n                        <img src=\"./assets/images/gallery/album-1/images1.jpg\">\n                    </div>\n                    <div class=\"gallery-header\">\n                        <h3 class=\"title mb-0\">New Year Celeration</h3>\n                        <p class=\"text-secondary mb-0\">23-01-2020</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-4 col-sm-6 col-12 mb-4\" [routerLink]=\"['/admin-gallery-view']\" data-toggle=\"modal\" data-target=\"#albumModal\">\n                <div class=\"gallery-wrapper\">\n                    <div class=\"gallery-content mb-4\">\n                        <img src=\"./assets/images/gallery/album-1/images2.jpg\">\n                    </div>\n                    <div class=\"gallery-header\">\n                        <h3 class=\"title mb-0\">New Year Celeration</h3>\n                        <p class=\"text-secondary mb-0\">23-01-2020</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-4 col-sm-6 col-12 mb-4\" [routerLink]=\"['/admin-gallery-view']\" data-toggle=\"modal\" data-target=\"#albumModal\">\n                <div class=\"gallery-wrapper\">\n                    <div class=\"gallery-content mb-4\">\n                        <img src=\"./assets/images/gallery/album-1/images3.jpg\">\n                    </div>\n                    <div class=\"gallery-header\">\n                        <h3 class=\"title mb-0\">New Year Celeration</h3>\n                        <p class=\"text-secondary mb-0\">23-01-2020</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal albumModal fade\" id=\"albumModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">New Year Celeration</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <div class=\"col-12 mb-4\">\n                            <img src=\"./assets/images/gallery/album-1/images.jpg\" />\n                        </div>\n                        <div class=\"col-12 mb-4\">\n                            <img src=\"./assets/images/gallery/album-1/images1.jpg\" />\n                        </div>\n                        <div class=\"col-12 mb-4\">\n                            <img src=\"./assets/images/gallery/album-1/images2.jpg\" />\n                        </div>\n                        <div class=\"col-12 mb-4\">\n                            <img src=\"./assets/images/gallery/album-1/images3.jpg\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery/admin-gallery.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery/admin-gallery.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminGalleryAdminGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Gallery Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>Gallery Management</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-gallery-view']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">View Gallery</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-gallery-create']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-calendar-check text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Create Album</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-inquiry/admin-inquiry.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-inquiry/admin-inquiry.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminInquiryAdminInquiryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"row\">\n            <div class=\"col-12 col-md-8\">\n                <div class=\"breadcrumbs-area\">\n                    <h3>Inquery Management</h3>\n                    <ul>\n                        <li><a [routerLink]=\"['/super-dashboard']\">Dashboard</a></li>\n                        <li>Inquery Management</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Full Name</th>\n                                                    <th>Email</th>\n                                                    <th>Contact No.</th>\n                                                    <th>Inquery For</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Mr. Kiran Sapate</td>\n                                                    <td>kiransapate@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>MBA</td>\n                                                    <td>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Principal</td>\n                                                    <td>Mr. Anand Patil</td>\n                                                    <td>anandpatil@gmail.com</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>HOD</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>satyajitpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Class Teacher</td>\n                                                    <td>Mr. Kiran Sapate</td>\n                                                    <td>kiransapate@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Teacher</td>\n                                                    <td>Mr. Anand Patil</td>\n                                                    <td>anandpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Student</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>satyajitpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminTimetableForstudentAdminTimetableForstudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Student Timetable Setup</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-timetable']\">Timetable Management</a>\n                </li>\n                <li>Student Timetable Setup</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Show</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3 mb-3 float-right\">Print</button>\n                                    <div class=\"table-responnsive\">\n                                        <table class=\"table table-bordered\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Timeslots</th>\n                                                    <th>Mon</th>\n                                                    <th>Tue</th>\n                                                    <th>Wed</th>\n                                                    <th>Thu</th>\n                                                    <th>Fri</th>\n                                                </tr>\n                                                <tr>\n                                                    <td>10:00 AM - 11:00 AM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>11:00 AM - 12:00 Noon</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>12:00 NOON - 01:00 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>01:00 PM 01:30 PM</td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>01:30 PM 02:30 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>03:30 PM 04:30 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>04:30 PM 05:30 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                            </thead>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminTimetableForteacherAdminTimetableForteacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Teacher Timetable Setup</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-timetable']\">Timetable Management</a>\n                </li>\n                <li>Teacher Timetable Setup</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Teacher *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Teacher *</option>\n                                        <option value=\"1\">Teacher 1</option>\n                                        <option value=\"2\">Teacher 2</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Show</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3 mb-3 float-right\">Print</button>\n                                    <div class=\"table-responnsive\">\n                                        <table class=\"table table-bordered\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Timeslots</th>\n                                                    <th>Mon</th>\n                                                    <th>Tue</th>\n                                                    <th>Wed</th>\n                                                    <th>Thu</th>\n                                                    <th>Fri</th>\n                                                </tr>\n                                                <tr>\n                                                    <td>10:00 AM - 11:00 AM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Maths</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>11:00 AM - 12:00 Noon</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>History</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>12:00 NOON - 01:00 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Biology</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>01:00 PM 01:30 PM</td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                    <td class=\"bg-secondary\">\n                                                        <span class=\"w-100 float-left\"><strong>Break</strong></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>01:30 PM 02:30 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Accounts</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>03:30 PM 04:30 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>English</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>04:30 PM 05:30 PM</td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                    <td>\n                                                        <span class=\"w-100 float-left\"><strong>Chemistry</strong></span>\n                                                        <span><small>Mr. Mohan Jadhav</small></span>\n                                                    </td>\n                                                </tr>\n                                            </thead>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminTimetableSetupAdminTimetableSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n        <div class=\"breadcrumbs-area\">\n            <h3>Timetable Setup</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-timetable']\">Timetable Management</a>\n                </li>\n                <li>Timetable Setup</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div class=\"card-body pb-3\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Day *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Day *</option>\n                                        <option value=\"1\">Monday</option>\n                                        <option value=\"2\">Tuesday</option>\n                                        <option value=\"3\">Wednesday</option>\n                                        <option value=\"4\">Thursday</option>\n                                        <option value=\"4\">Friday</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Hour *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Hour *</option>\n                                        <option value=\"1\">10</option>\n                                        <option value=\"2\">11</option>\n                                        <option value=\"3\">12</option>\n                                        <option value=\"4\">01</option>\n                                        <option value=\"5\">02</option>\n                                        <option value=\"6\">03</option>\n                                        <option value=\"7\">04</option>\n                                        <option value=\"8\">05</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Minute *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Hour *</option>\n                                        <option value=\"1\">00</option>\n                                        <option value=\"2\">01</option>\n                                        <option value=\"3\">02</option>\n                                        <option value=\"4\">03</option>\n                                        <option value=\"5\">57</option>\n                                        <option value=\"6\">58</option>\n                                        <option value=\"7\">59</option>\n                                        <option value=\"8\">60</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Is Break? *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Option *</option>\n                                        <option value=\"1\">Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">First Year</option>\n                                        <option value=\"2\">Second Year</option>\n                                        <option value=\"3\">Third Year</option>\n                                        <option value=\"4\">Fourth Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Subject *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Class *</option>\n                                        <option value=\"1\">Subject 1</option>\n                                        <option value=\"2\">Subject 2</option>\n                                        <option value=\"3\">Subject 3</option>\n                                        <option value=\"4\">Subject 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Teacher *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Teacher *</option>\n                                        <option value=\"1\">Teacher 1</option>\n                                        <option value=\"2\">Teacher 2</option>\n                                        <option value=\"3\">Teacher 3</option>\n                                        <option value=\"4\">Teacher 4</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 mt-5 form-group\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark mr-3\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable/admin-timetable.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable/admin-timetable.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminTimetableAdminTimetableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Timetable Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>Timetable Management</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-timetable-setup']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Timetable Setup</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-timetable-forstudent']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Classroom Timetable</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-timetable-forteacher']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Teachers Timetable</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementAccountantAdminUsermanagementAccountantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Accountant Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Accountant</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department</th>\n                                                    <th>Accountant Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementAllusersAdminUsermanagementAllusersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>All Users Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>All Users</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>User Type</th>\n                                                    <th>User Name</th>\n                                                    <th>Email</th>\n                                                    <th>Contact No.</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Secondary Admin</td>\n                                                    <td>Mr. Kiran Sapate</td>\n                                                    <td>kiransapate@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Principal</td>\n                                                    <td>Mr. Anand Patil</td>\n                                                    <td>anandpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>HOD</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>satyajitpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Class Teacher</td>\n                                                    <td>Mr. Kiran Sapate</td>\n                                                    <td>kiransapate@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Teacher</td>\n                                                    <td>Mr. Anand Patil</td>\n                                                    <td>anandpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Student</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>satyajitpatil@gmail.com</td>\n                                                    <td>9561311757</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementBusdriverAdminUsermanagementBusdriverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Bus Driver Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Bus Driver</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department</th>\n                                                    <th>Bus Driver Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementClassteacherAdminUsermanagementClassteacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Class Teacher Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Class Teacher</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department</th>\n                                                    <th>Division</th>\n                                                    <th>Class Name</th>\n                                                    <th>Class Teacher Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mechanincal Engineering</td>\n                                                    <td>First Year</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mechanincal Engineering</td>\n                                                    <td>Second Year</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mechanincal Engineering</td>\n                                                    <td>Third Year</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mechanincal Engineering</td>\n                                                    <td>Final Year</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>NA</td>\n                                                    <td>First Year</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>NA</td>\n                                                    <td>Second Year</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>NA</td>\n                                                    <td>Third Year</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementHodAdminUsermanagementHodComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>HOD Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>HOD</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department</th>\n                                                    <th>Division</th>\n                                                    <th>HOD Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mechanincal Engineering</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>NA</td>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementLibrarianAdminUsermanagementLibrarianComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Librarian Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Librarian</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department</th>\n                                                    <th>Librarian Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Engineering</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementPrincipalAdminUsermanagementPrincipalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Pricipal Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Principal</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Department</th>\n                                                    <th>Pricipal Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Enginerring</td>\n                                                    <td>Mr. Kiran Khanna</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>MBA</td>\n                                                    <td>Mrs. Leena Chauvan</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementStudentAdminUsermanagementStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Student Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Student</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Student Name</th>\n                                                    <th>Class</th>\n                                                    <th>Division</th>\n                                                    <th>Depratment</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Pankaj Pede</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Satyajit Patil</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Pankaj Pede</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Satyajit Patil</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Pankaj Pede</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Satyajit Patil</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Pankaj Pede</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Satyajit Patil</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Pankaj Pede</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Satyajit Patil</td>\n                                                    <td>First Year</td>\n                                                    <td>Electronics Engineering</td>\n                                                    <td>Engineering</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Depratment *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Depratment *</option>\n                                        <option value=\"1\">All</option>\n                                        <option value=\"2\">Electronics</option>\n                                        <option value=\"3\">Mechanical</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement-studentstep2']\" class=\"btn-fill-lg bg-blue-dark\">Next</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementStudentstep2AdminUsermanagementStudentstep2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Add Student</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-configuration']\">Configuration</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement-student']\">Student</a>\n                </li>\n                <li>Add Student</li>\n            </ul>\n        </div>\n\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- About School -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <h3>Admission Details</h3>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Department *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Department *</option>\n                                        <option value=\"1\">Engineering</option>\n                                        <option value=\"2\">MBA</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Class *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectClass *</option>\n                                        <option value=\"1\">Mechnical</option>\n                                        <option value=\"2\">Electronics & Telecommunication Engineering</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Select Division *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Division *</option>\n                                        <option value=\"1\">1st Year</option>\n                                        <option value=\"2\">2nd Year</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Actual Fees *</label>\n                                    <input type=\"text\"  placeholder=\"Enter Actual Fees\" class=\"form-control\" disabled>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Allocated Fees *</label>\n                                    <input type=\"text\"  placeholder=\"Enter Allocated Fees\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Ammount Paid *</label>\n                                    <input type=\"text\"  placeholder=\"Enter Ammount Paid\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 mt-5\">\n                                    <h3>Student Details</h3>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>First Name *</label>\n                                    <input type=\"text\"  placeholder=\"Enter First Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Middle Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Middle Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Last Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Last Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Profile Photo</label>\n                                    <input type=\"file\" placeholder=\"Logo\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email ID</label>\n                                    <input type=\"email\" placeholder=\"Enter Email ID\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Mobile No.</label>\n                                    <input type=\"number\" placeholder=\"Enter Mobile No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>ADHAR No. </label>\n                                    <input type=\"text\" placeholder=\"Enter UID No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admission Date *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admission No. *</label>\n                                    <input type=\"number\" placeholder=\"Enter Admission No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Date of Birth *</label>\n                                    <input type=\"date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Birth Place</label>\n                                    <input type=\"text\" placeholder=\"Enter Admission No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Gender *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Gender </option>\n                                        <option value=\"1\">Male</option>\n                                        <option value=\"2\">Female</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Blood Group *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Blood Group </option>\n                                        <option value=\"1\">A+</option>\n                                        <option value=\"2\">A-</option>\n                                        <option value=\"1\">B+</option>\n                                        <option value=\"2\">B-</option>\n                                        <option value=\"1\">AB+</option>\n                                        <option value=\"2\">AB-</option>\n                                        <option value=\"1\">O+</option>\n                                        <option value=\"2\">O-</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Weight</label>\n                                    <input type=\"number\" placeholder=\"Enter Admission No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Height</label>\n                                    <input type=\"number\" placeholder=\"Enter Admission No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Specially Ebled</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Type </option>\n                                        <option value=\"1\">Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Nationality</label>\n                                    <input type=\"text\" placeholder=\"Enter Nationality\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Mother Tongue</label>\n                                    <input type=\"text\" placeholder=\"Enter Nationality\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-6 col-12 form-group\">\n                                    <label>Address</label>\n                                    <textarea placeholder=\"Enter School Address\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>PIN Code</label>\n                                    <input type=\"number\" placeholder=\"Enter Admission No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 mt-5\">\n                                    <h3>Parents Details</h3>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>First Name *</label>\n                                    <input type=\"text\"  placeholder=\"Enter First Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Middle Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Middle Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Last Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Last Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email ID *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email ID\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Mobile No. *</label>\n                                    <input type=\"number\" placeholder=\"Enter Mobile No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 mt-5\">\n                                    <h3>Past Education Details</h3>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Previous School Name</label>\n                                    <input type=\"text\" placeholder=\"Enter Past School Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Previous Board Name</label>\n                                    <input type=\"text\" placeholder=\"Enter Previous Board Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Previous Standard/Class</label>\n                                    <input type=\"text\" placeholder=\"Enter Previous Standard/Class\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Last School Left Date</label>\n                                    <input type=\"number\" placeholder=\"Enter Last School Left Date\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Standard</label>\n                                    <input type=\"text\" placeholder=\"Enter Standard\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School/Collage</label>\n                                    <input type=\"text\" placeholder=\"Enter School/Collage\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Board/University</label>\n                                    <input type=\"text\" placeholder=\"Enter Board/University\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Year</label>\n                                    <input type=\"number\" placeholder=\"Enter Year\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Obtained Marks</label>\n                                    <input type=\"number\" placeholder=\"Enter Year\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Total Marks</label>\n                                    <input type=\"number\" placeholder=\"Enter Year\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Last School LC</label>\n                                    <input type=\"file\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Bonafide Certificate</label>\n                                    <input type=\"file\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Birth Certificate</label>\n                                    <input type=\"file\" class=\"form-control file-wrapper\">\n                                    <span class=\"file-upload-span\">Click to upload</span>\n                                </div>\n                                <div class=\"col-xl-6 col-12 form-group\">\n                                    <label>Other Remarks</label>\n                                    <textarea placeholder=\"Enter Other Remarks\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-xl-6 col-12 form-group\">\n                                    <label>Last School Left Reason</label>\n                                    <textarea placeholder=\"Enter Last School Left Reason\"  class=\"form-control\"></textarea>\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button class=\"btn-fill-lg bg-blue-dark\">Add</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementTeacherAdminUsermanagementTeacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Class Teacher Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-usermanagement']\">User Management</a>\n                </li>\n                <li>Class Teacher</li>\n            </ul>\n        </div> \n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Secondary Admin -->\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        \n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <div class=\"table-box-wrap\">\n                                    <div class=\"table-responsive expenses-table-box\">\n                                        <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Teacher Name</th>\n                                                    <th>Action</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>Mr. Anand Kale</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>Mr. Satyajit Patil</td>\n                                                    <td>\n                                                        <a class=\"text-warning mr-3\"><i class=\"icon icon-pencil1\"></i></a>\n                                                        <a class=\"text-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"icon icon-trash2\"></i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <form class=\"new-added-form mt-5\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Title *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">Select Title *</option>\n                                        <option value=\"1\">Dr.</option>\n                                        <option value=\"2\">Er.</option>\n                                        <option value=\"3\">Mr.</option>\n                                        <option value=\"4\">Mrs.</option>\n                                        <option value=\"5\">Miss.</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Full Name *</label>\n                                    <input type=\"text\" placeholder=\"Enter Full Name\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Email *</label>\n                                    <input type=\"email\" placeholder=\"Enter Email\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Password *</label>\n                                    <input type=\"email\" placeholder=\"Enter Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Confirm Password *</label>\n                                    <input type=\"email\" placeholder=\"Confirm Password\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact No. * </label>\n                                    <input type=\"number\" placeholder=\"Enter Contact No.\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button [routerLink]=\"['/admin-usermanagement']\" class=\"btn-fill-lg bg-blue-dark\">Update</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"modal deleteModal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\">Delete Member?</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        Are you sure want to delete Anand Singh?\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button  class=\"btn-fill btn-danger\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n                        <button class=\"btn-fill btn-outline-secondary\" type=\"button\">Reset</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement/admin-usermanagement.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement/admin-usermanagement.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminUsermanagementAdminUsermanagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-header></app-admin-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-admin-sidebar></app-admin-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>User Management</h3>\n            <ul>\n                <li>User Management</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-allusers']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">All Users</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-student']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Student</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-teacher']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Teacher</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-classteacher']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Class Teacher</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-hod']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">HOD</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-librarian']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Librarian</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-accountant']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Accountant</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-busdriver']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Bus Driver</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/admin-usermanagement-principal']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Principal</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-admin-footer></app-admin-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-footer/admin-footer.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-footer/admin-footer.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCommonAdminFooterAdminFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-wrap-layout1\">\n    <div class=\"copyright bg-transparent text-left\">© 2019 Copyrights <a href=\"#\">SSS Webtech Solutions</a> . All rights reserved. </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-header/admin-header.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-header/admin-header.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCommonAdminHeaderAdminHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header Menu Area Start Here -->\n<div class=\"navbar navbar-expand-md header-menu-one bg-light fixed-top\">\n    <div class=\"nav-bar-header-one\">\n        <div class=\"header-logo\">\n            <a href=\"index.html\">\n                <img src=\"./assets/images/logo.png\" alt=\"logo\">\n            </a>\n        </div>\n            <div class=\"toggle-button sidebar-toggle\">\n            <button type=\"button\" class=\"item-link\">\n                <span class=\"btn-icon-wrap\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </span>\n            </button>\n        </div>\n    </div>\n    <div class=\"d-md-none mobile-nav-bar\">\n        <button class=\"navbar-toggler pulse-animation\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mobile-navbar\" aria-expanded=\"false\">\n            <i class=\"far fa-arrow-alt-circle-down\"></i>\n        </button>\n        <button type=\"button\" class=\"navbar-toggler sidebar-toggle-mobile\">\n            <i class=\"fas fa-bars\"></i>\n        </button>\n    </div>\n    <div class=\"header-main-menu collapse navbar-collapse p-0\" id=\"mobile-navbar\">\n        <ul class=\"navbar-nav\">\n            <li class=\"navbar-item header-search-bar\">\n                <!-- <div class=\"input-group stylish-input-group\">\n                    <span class=\"input-group-addon\">\n                        <button type=\"submit\">\n                            <span class=\"flaticon-search\" aria-hidden=\"true\"></span>\n                        </button>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Find Something . . .\">\n                </div> -->\n                <div class=\"col-12 form-group\">\n                    <select class=\"form-control\">\n                        <option value=\"\">Select Year *</option>\n                        <option value=\"1\" selected>2019-2020</option>\n                        <option value=\"2\">2018-2019</option>\n                    </select>\n                </div>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"navbar-item dropdown header-admin\">\n                <a class=\"navbar-nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\"\n                    aria-expanded=\"false\">\n                    <div class=\"admin-title\">\n                        <h5 class=\"item-title\">SSS Webtech</h5>\n                        <span>Super Admin</span>\n                    </div>\n                    <div class=\"admin-img\">\n                        <img src=\"./assets/images/figure/admin.jpg\" alt=\"Admin\">\n                    </div>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <div class=\"item-header\">\n                        <h6 class=\"item-title\">SSS Webtech</h6>\n                    </div>\n                    <div class=\"item-content\">\n                        <ul class=\"settings-list\">\n                            <li><a><i class=\"flaticon-user\"></i>My Profile</a></li>\n                            <li><a [routerLink]=\"['/login']\"><i class=\"flaticon-turn-off\"></i>Log Out</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </li>\n            \n        </ul>\n    </div>\n</div>\n<!-- Header Menu Area End Here -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-sidebar/admin-sidebar.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-sidebar/admin-sidebar.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCommonAdminSidebarAdminSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Sidebar Area Start Here -->\n<div class=\"sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color\">\n    <div class=\"mobile-sidebar-header d-md-none\">\n            <div class=\"header-logo\">\n                <a href=\"index.html\"><img src=\"./assets/images/logo.png\" alt=\"logo\"></a>\n            </div>\n    </div>\n    \n        <div class=\"sidebar-menu-content\">\n            <ul class=\"nav nav-sidebar-menu sidebar-toggle-view\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-dashboard']\"><i class=\"icon icon-library2\"></i><span>Dashboard</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-usermanagement']\"><i class=\"icon icon-user-lock\"></i><span>User Management</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-feesmanagement']\"><i class=\"icon icon-bag-dollar\"></i><span>Fees</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-attendance']\"><i class=\"icon icon-list3\"></i><span>Attendace</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-timetable']\"><i class=\"icon icon-alarm-add2\"></i><span>Timetable</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-exam']\"><i class=\"icon icon-clipboard-check\"></i><span>Exam</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-elibrary']\"><i class=\"icon icon-book2\"></i><span>e-Library</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-academiccalendar']\"><i class=\"icon icon-calendar-check\"></i><span>Academic Acalendar</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-gallery']\"><i class=\"icon icon-video-player\"></i><span>Gallery</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-inquiry']\"><i class=\"icon icon-bubble-question\"></i><span>Inquiry</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-configuration']\"><i class=\"icon icon-cog\"></i><span>Configuration</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/admin-chat']\"><i class=\"icon icon-bubbles\"></i><span>Chat</span></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- Sidebar Area End Here -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- Login Page Start Here -->\n  <div class=\"login-page-wrap\">\n    <div class=\"login-page-content\">\n        <div class=\"login-box\">\n            <div class=\"item-logo\">\n                <img src=\"./assets/images/logo2.png\" alt=\"logo\">\n            </div>\n            <form action=\"#\" class=\"login-form\">\n                <div class=\"form-group\">\n                    <label>Username</label>\n                    <input type=\"text\" placeholder=\"Enter usrename\" class=\"form-control\">\n                    <i class=\"far fa-envelope\"></i>\n                </div>\n                <div class=\"form-group\">\n                    <label>Password</label>\n                    <input type=\"text\" placeholder=\"Enter password\" class=\"form-control\">\n                    <i class=\"fas fa-lock\"></i>\n                </div>\n                <div class=\"form-group d-flex align-items-center justify-content-between\">\n                    <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"remember-me\">\n                        <label for=\"remember-me\" class=\"form-check-label\">Remember Me</label>\n                    </div>\n                    <a href=\"#\" class=\"forgot-btn\">Forgot Password?</a>\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"login-btn\">Login</button>\n                    <a [routerLink]=\"['/admin-confirmlogin']\" class=\"btn btn-primary\">Admin</a>\n                    <a [routerLink]=\"['/super-dashboard']\" class=\"btn btn-primary ml-3\">Super Admin</a>\n                </div>\n                \n        <!-- <div class=\"sign-up\">Don't have an account ? <a href=\"#\">Signup now!</a></div> -->\n            </form>\n        </div>\n    </div>\n</div>\n<!-- Login Page End Here -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/academic-session/academic-session.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/academic-session/academic-session.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAcademicSessionAcademicSessionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"page-classes\">\n    <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n       <h3 class=\"title-txt text-center w-100 float-left text-white\">ACADEMIC SESSION</h3>\n    </div>\n    <div class=\"container\">\n       <div class=\"row mb-5\">\n          <div class=\"col-lg-12 col-md-12\">\n             <div class=\"abt-title mb-2 float-left w-100\">\n                <h3 class=\"table-title-txt\">Common holidays (academic session 2019-2020)</h3>\n             </div>\n             <div class=\"about-desc\">\n               <div class=\"responsive-table\">\n                    <table class=\"table text-left custome-table\">\n                        <thead>\n                            <tr>\n                                <th>Vacation</th>\n                                <th>From</th>\n                                <th>School Reopens for Students</th>\n                                <th>School Reopens for Teachers</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Diwali Vacation</td>\n                                <td>21st Oct 2019 to 1st Nov 2019</td>\n                                <td>Monday, 4th Nov 2019</td>\n                                <td>Monday, 4th Nov 2019</td>\n                            </tr>\n                            <tr>\n                                <td>Christmas</td>\n                                <td>24th Dec 2019 to 1st Jan 2020</td>\n                                <td>Thursday, 2nd Jan 2020</td>\n                                <td>Thursday, 2nd Jan 2020</td>\n                            </tr>\n                            <tr>\n                                <td>Session Break</td>\n                                <td>22nd Apr 2020 to 30th Apr 2020</td>\n                                <td>Continues into Summer Vacation</td>\n                                <td>Not for Teachers</td>\n                            </tr>\n                            <tr>\n                            <td>Summer Vacation</td>\n                                <td>1st May 2020 to 10th June 2020</td>\n                                <td>1st May 2020 to 10th June 2020</td>\n                                <td>Monday, 1st June 2020</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n             </div>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"row mb-5\">\n          <div class=\"col-lg-12 col-md-12\">\n             <div class=\"abt-title mb-2 float-left w-100\">\n                <h3 class=\"table-title-txt\">Authorized gazetted holidays</h3>\n             </div>\n             <div class=\"about-desc\">\n               <div class=\"responsive-table\">\n                    <table class=\"table text-left custome-table\">\n                        <thead>\n                            <tr>\n                            <th>Date</th>\n                                <th>Day</th>\n                                <th>Events</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>05-Jun-2019</td>\n                                <td>Monday</td>\n                                <td>Bakri Eid</td>\n                            </tr>\n                            <tr>\n                                <td>15-Aug-2019</td>\n                                <td>Thursday</td>\n                                <td>Independence Day</td>\n                            </tr>\n                            <tr>\n                                <td>17-Aug-2019</td>\n                                <td>Saturday</td>\n                                <td>Pharashi New Year</td>\n                            </tr>\n                            <tr>\n                                <td>24-Aug-2019</td>\n                                <td>Saturday</td>\n                                <td>Janamashtami</td>\n                            </tr>\n                            <tr>\n                                <td>02-Sept-2019</td>\n                                <td>Monday</td>\n                                <td>Ganesh Chaturthi Day 1</td>\n                            </tr>\n                            <tr>\n                                <td>03-Sept-2019</td>\n                                <td>Tuesday</td>\n                                <td>Ganesh Chaturthi Day 2</td>\n                            </tr>\n                            <tr>\n                                <td>10-Sept-2019</td>\n                                <td>Tuesday</td>\n                                <td>Muharram</td>\n                            </tr>\n                            <tr>\n                                <td>12-Sept-2019</td>\n                                <td>Thursday</td>\n                                <td>Anant Chaturdashi</td>\n                            </tr>\n                            <tr>\n                                <td>02-Oct-2019</td>\n                                <td>Wednesday</td>\n                                <td>Gandhi Jayanti</td>\n                            </tr>\n                            <tr>\n                                <td>08-Oct-2019</td>\n                                <td>Tuesday</td>\n                                <td>Dussehra</td>\n                            </tr>\n                            <tr>\n                                    <td>27-Oct-2019</td>\n                                <td>Sunday</td>\n                                <td>Diwali</td>\n                            </tr>\n                            <tr>\n                                <td>10-Nov-2019</td>\n                                <td>Wednesday</td>\n                                <td>Eid-E-Milad</td>\n                            </tr>\n                            <tr>\n                                <td>12-Nov-2019</td>\n                                <td>Tuesday</td>\n                                <td>Guru Nanak Jayanti</td>\n                            </tr>\n                            <tr>\n                                <td>25-Dec-2019</td>\n                                <td>Wednesday</td>\n                                <td>Chritsmas</td>\n                            </tr>\n                            <tr>\n                                <td>1-Jan–2020</td>\n                                <td>Wednesday</td>\n                                <td>New Year</td>\n                            </tr>\n                            <tr>\n                                <td>15-Jan–2020</td>\n                                <td>Wednesday</td>\n                                <td>Makar Sankranti</td>\n                            </tr>\n                            <tr>\n                                <td>15-Jan–2020</td>\n                                <td>Wednesday</td>\n                                <td>Chrismas</td>\n                            </tr>\n                            <tr>\n                                <td>15-Jan–2020</td>\n                                <td>Wednesday</td>\n                                <td>Chrismas</td>\n                            </tr>\n                            <tr>\n                                <td>26-Jan–2020</td>\n                                <td>Sunday</td>\n                                <td>Republic Day</td>\n                            </tr>\n                            \n                            <tr>\n                                <td>19-Feb–2020</td>\n                                <td>Wednesday</td>\n                                <td>Shiva Jayanti</td>\n                            </tr>\n                            \n                            <tr>\n                                <td>21-Feb–2020</td>\n                                <td>Friday</td>\n                                <td>Mahashivratri</td>\n                            </tr>\n                            \n                            <tr>\n                                <td>10-March–2020</td>\n                                <td>Tuesday</td>\n                                <td>Holi</td>\n                            </tr>\n                            <tr>\n                                <td>25-March–2020</td>\n                                <td>Wednesday</td>\n                                <td>Gudi Padwa</td>\n                            </tr>\n                            <tr>\n                                <td>10-April–2020</td>\n                                <td>Friday</td>\n                                <td>Good Friday</td>\n                            </tr>\n                            <tr>\n                                <td>14-April–2020</td>\n                                <td>Tuesday</td>\n                                <td>Ambedkar Jayanti</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n             </div>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"row mb-5\">\n          <div class=\"col-lg-12 col-md-12\">\n             <div class=\"abt-title mb-2 float-left w-100\">\n                <h3 class=\"table-title-txt\">Examination cycle dates (2019-20)</h3>\n             </div>\n             <div class=\"about-desc\">\n               <div class=\"responsive-table\">\n                    <table class=\"table text-left custome-table\">\n                        <thead>\n                            <tr>\n                                <th>Grade III to V</th>\n                                <th>Grade VI to VIII</th>\n                                <th>Dates</th>\n                                <th>Open House Dates</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Cycle Test 2</td>\n                                <td>Periodic Test 1</td>\n                                <td>19.08.2019 to 27.08.2019</td>\n                                <td>07.09.2019 (Saturday)</td>\n                            </tr>\n                            <tr>\n                                <td>Cycle Test 1</td>\n                                <td>Half Yearly Exam</td>\n                                <td>18.11.2019 to 26.11.2019</td>\n                                <td>07.09.2019 (Saturday)</td>\n                            </tr>\n                            <tr>\n                            <td>Cycle Test 4</td>\n                                <td>Yearly Exam(Std.VI &amp; VII)</td>\n                                <td>13.04.2020 to 21.04.2020</td>\n                                <td>30.04.2020( Thursday)</td>\n                            </tr>\n                            <tr>\n                                <td>Cycle Test 1</td>\n                                <td>Yearly Exam(Std. VIII)</td>\n                                <td>19.03.2020 to 27.03.2020</td>\n                                <td>31.03.2020(Tuesday)</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n             </div>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n    </div>\n </div>\n <app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/admission-procedure/admission-procedure.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/admission-procedure/admission-procedure.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicAdmissionProcedureAdmissionProcedureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"page-classes\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Admission procedure</h3>\n   </div>\n   <div class=\"container\">\n      <div class=\"row mb-5\">\n         <div class=\"col-lg-12 col-md-12 mb-5\">\n            <div class=\"about-desc\">\n               <div class=\"skepost\">\n                   <p align=\"center\">\n                       Enquiry at the Reception\n                       <br>↓<br>\n                       Purchase of Registration Form\n                       <br>↓<br>\n                       Formal information of entrance procedure\n                       <br>↓<br>\n                       Entrance Test / Assessment and Evaluation\n                       <br>↓<br>\n                       Parents Interface, Admission Offer\t\n                       <br>↓<br>\n                       Deposition of Documents\n                       <br>↓<br>\n                       Submission of Fees\n                       <br>↓<br>\n                       Collection of PPLS-Kit\n                       <br>↓<br>\n                       Allotment of Section &amp; House\n                       <br>↓<br>\n                       Welcome to PPLS <br>\n                   </p>\n               </div>\n            </div>\n         </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"col-lg-12 col-md-12 mt-5\">\n          <div class=\"abt-title\">\n             <h3 class=\"table-title-txt mb-3\">Admission - rules/guidelines</h3>\n          </div>\n          <div class=\"about-desc\">\n           <ul class=\"with-icon\">\n               <li> Certain documents like Birth Certificate, Transfer Certificate,Mark Sheet of Previous Class should be submitted to the Fee counter for maintenance of record. These documents should be submitted within 15 days from the date of admission failing which the provisional admission stands cancelled.<b></b></li>\n               <li> In class-I the Date of Birth certificate has validity in place of T.C. Certificates from Civic Bodies, Govt. Hospitals, Reputed Private Hospitals will be treated as genuine proof of D.O.B. only for Class I.<b></b></li>\n               <li>Till T.C. and all other related documents are not submitted, the admission is only provisional and can stand cancelled.<b></b></li>\n               <li>No demand for changing the Date of Birth will be entertained. (Unless, T.C. counter signed by the DIOS with changed records from the previous school is submitted in the T.C. office).<b></b></li>\n               <li>As per School norms students will not be allowed to change their Class once the registration has been done, unless they take permission from the Principal.<b></b></li>\n           </ul>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"col-lg-12 col-md-12 mt-5\">\n          <div class=\"abt-title\">\n             <h3 class=\"table-title-txt mb-3\">withdrawal - rules/guidelines</h3>\n          </div>\n          <div class=\"about-desc\">\n           <ul class=\"with-icon\">\n               <li> For T.C. the applicant should first clear all dues (fee, library, N.C.C., Scouts &amp; Guides, Sports, Board Exam etc.</li>\n               <li>Counter signed T.C will be issued after 6 days from the date of submission of application.</li>\n               <li>T.C. without countersignature will be issued after 3 days from the date of submission of the application.</li>\n               <li>A duplicate or triplicate copy of T.C. will be issued only after an affidavit and newspaper cutting is submitted informing us that the TC is lost.</li>\n               <li>No T.C. will be issued after the issue of the triplicate T.C.</li>\n               <li>In case of new admission in the mid-session, a child has to pay fees for 6 months as well as for the transport facility also the rule will be the same.</li>\n           </ul>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/between-us-portal/between-us-portal.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/between-us-portal/between-us-portal.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicBetweenUsPortalBetweenUsPortalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"page-classes\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Between us portal</h3>\n   </div>\n   <div class=\"container\">\n      <div class=\"row mb-5\">\n       <div class=\"col-lg-12 col-md-12\">\n         <div class=\"about-desc\">\n            <p>\n                <b>Dear Parents,</b><br>\t\t\t\n                Between us portal is a Parent – School communication website as well as mobile app.\n            </p>\n            <div class=\"abt-title mt-5\">\n               <h3 class=\"table-title-txt mb-3\">The Between Us Portal will help to</h3>\n            </div>\n            <ul class=\"with-icon\">\n                <li>Update the parent information / Emergency Information as well as address / Contact details.</li>\n                <li>View the academic resources.</li>\n                <li>Receive circulars and announcement.</li>\n                <li>Communicate with the school / teachers via message option.</li>\n                <li>Get attendance information.</li>\n            </ul>\n            <div class=\"abt-title mt-5\">\n               <h3 class=\"table-title-txt mb-3\">How to login as a Parent</h3>\n            </div>\n            <ul class=\"with-icon\">\n                <li>On admission, a username and ‘one time password’ for using the portal send to all the parents on their registered mobile number and / or on their email id.</li>\n                <li>Go to the website – <a href=\"https://www.betweenus.in\"> www.betweenus.in</a></li>\n                <li>Login using the username and ‘one time’ password given on admission.</li>\n                <li>Click on the relevant option on the home screen.</li>\n            </ul>\n            <div class=\"abt-title mt-5\">\n               <h3 class=\"table-title-txt mb-3\">Troubleshooting</h3>\n            </div>\n            <p>1. If you have forgotten the password please follow the procedure given below.</p>\n            <ul class=\"with-icon pl-5\">\n                <li>Complete the online form on<a href=\"https://www.betweenus.in/Forgetpass.aspx\"> www.betweenus.in/Forgetpass.aspx</a></li>\n                <li>On filling the form , you will receive an email as well as SMS with the new password.</li>\n            </ul>\n            <p>2. In case of any queries , please write to it. Support@ppls.org with the following information.</p>\n            <ul class=\"with-icon pl-5\">\n                <li>School name</li>\n                <li>Between Us Username</li>\n                <li>Concern/ Issue</li>\n                <li>Contact name / Mobile no</li>\n            </ul>\n         </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"col-lg-12 col-md-12 mt-5\">\n          <div class=\"abt-title\">\n             <h3 class=\"table-title-txt mb-3\">Admission - rules/guidelines</h3>\n          </div>\n          <div class=\"about-desc\">\n           <ul class=\"with-icon\">\n               <li> Certain documents like Birth Certificate, Transfer Certificate,Mark Sheet of Previous Class should be submitted to the Fee counter for maintenance of record. These documents should be submitted within 15 days from the date of admission failing which the provisional admission stands cancelled.<b></b></li>\n               <li> In class-I the Date of Birth certificate has validity in place of T.C. Certificates from Civic Bodies, Govt. Hospitals, Reputed Private Hospitals will be treated as genuine proof of D.O.B. only for Class I.<b></b></li>\n               <li>Till T.C. and all other related documents are not submitted, the admission is only provisional and can stand cancelled.<b></b></li>\n               <li>No demand for changing the Date of Birth will be entertained. (Unless, T.C. counter signed by the DIOS with changed records from the previous school is submitted in the T.C. office).<b></b></li>\n               <li>As per School norms students will not be allowed to change their Class once the registration has been done, unless they take permission from the Principal.<b></b></li>\n           </ul>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"col-lg-12 col-md-12 mt-5\">\n          <div class=\"abt-title\">\n             <h3 class=\"table-title-txt mb-3\">withdrawal - rules/guidelines</h3>\n          </div>\n          <div class=\"about-desc\">\n           <ul class=\"with-icon\">\n               <li> For T.C. the applicant should first clear all dues (fee, library, N.C.C., Scouts &amp; Guides, Sports, Board Exam etc.</li>\n               <li>Counter signed T.C will be issued after 6 days from the date of submission of application.</li>\n               <li>T.C. without countersignature will be issued after 3 days from the date of submission of the application.</li>\n               <li>A duplicate or triplicate copy of T.C. will be issued only after an affidavit and newspaper cutting is submitted informing us that the TC is lost.</li>\n               <li>No T.C. will be issued after the issue of the triplicate T.C.</li>\n               <li>In case of new admission in the mid-session, a child has to pay fees for 6 months as well as for the transport facility also the rule will be the same.</li>\n           </ul>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"col-lg-12 col-md-12 mt-5\">\n          <div class=\"abt-title\">\n             <h3 class=\"table-title-txt\">Safety rules</h3>\n          </div>\n          <div class=\"about-desc\">\n             <h6 class=\"mt-2\">Rules for Younger Children</h6>\n             <ul class=\"with-icon\">\n                 <li><span>I KNOW my name , address telephone number , and my parent’s names.</span></li>\n                 <li><span>I always CHECK FIRST with my parents or the person in charge. I tell them before I go anywhere or get into a car , even with someone I know.</span></li>\n                 <li><span>I always CHECK FIRST with my parents or a trusted adult before I accept anything from anyone, even from someone  I know.</span></li>\n                 <li><span>\tI always TAKE A FRIEND with me when I go to places or play outside.</span></li>\n                 <li><span>\tI SAY NO if someone tries to touch me or treat me in a way that makes me feet , scared, uncomfortable, or confused.</span></li>\n                 <li><span>\tIt’s ok to SAY NO and I know that there will always be someone who can help me.</span></li>\n                 <li><span>I Know that I can TELL my parents or a trusted adult if I feel scared, uncomfortable , or confused.</span></li>\n                 <li><span>\tI am STRONG , SMART , and have the right to be safe.</span></li>\n             </ul>\n             <h6 class=\"mt-5\">Rules for Older Children </h6>\n             <ul class=\"with-icon\">\n                 <li>DON’T GO OUT ALONE. There is safety in numbers. This rule isn’t just for little kids, it applies to teens ,too.</li>\n                 <li>ALWAYS TELL AN ADULT WHERE YOU’RE GOING. Letting someone know where you’ll be at all times is smart. if you’re faced with a risky situation or get into trouble, your family and friends will know where to find you.</li>\n                 <li>SAY NO IF YOU FEEL THREATEDND. If someone- anyone –touches you in a way that makes you feel uncomfortable, you have the right to say no. if you are pressurised in doing something that you know is wrong, be strong and stand your ground.</li>\n             </ul>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/career/career.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/career/career.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicCareerCareerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<section class=\"career\">\n    <div class=\"breadcrum position-relative float-left w-100\">\n        <h3 class=\"title-txt text-center w-100 float-left text-white\">Career with Us</h3>\n    </div>\n    <div class=\"container py-xl-5 py-lg-3\">\n        <div class=\"row \">\n            <div class=\"col-12 mt-5\">\n                <p class=\"text-center\">With a career with us, you can take the first steps toward starting a new career, building your resume, or pursuing new opportunities in your current job. Whatever your next career move, we will help you gain new career skills while you meet your work and family obligations.</p>\n            </div>\n        </div>\n        <div class=\"w3-agile-services row m-0 text-center\">\n            <div class=\"col-sm-4 services-right-grid\">\n              <div class=\"se-top\">\n                <div class=\"services-icon\">\n                <i class=\"icon icon-map-location\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"services-icon-info\">\n                  <h5>Address</h5>\n                  <p>Poste Podar Learn School, Poste Campus,\n                      Nalegaon Road,Malkapur,\n                      Udgir Dist-Latur, (MH) 413517</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 services-right-grid\">\n              <div class=\"se-top\">\n                <div class=\"services-icon\">\n                <i class=\"icon icon-phone-wave\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"services-icon-info\">\n                  <h5>Phone Number</h5>\n                  <p class=\"mb-0\">02385-258003/04</p>\n                  <p>+91-9763450250</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 services-right-grid\">\n              <div class=\"se-top\">\n                <div class=\"services-icon\">\n                <i class=\"icon icon-envelope\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"services-icon-info\">\n                  <h5>Email Address</h5>\n                  <a href=\"mailto:principal.ppls@podar.org\" target=\"_top\">principal.ppls@podar.org</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"> </div>\n          </div>\n    </div>\n</section>\n<app-footer></app-footer>\n    \n  \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/chairmans-desk/chairmans-desk.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/chairmans-desk/chairmans-desk.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicChairmansDeskChairmansDeskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"student-vision\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Chairman's Desk</h3>\n   </div>\n   <div class=\"container mb-5\">\n      <div class=\"row\">\n         <div class=\"col-12 text-center mb-3 logo-wrapper\">\n            <img src=\"./assets/images/desk/chairmans-desk.jpg\" style=\"width:300px\" class=\"mb-3\" alt=\"Chairman's Desk\">\n            <h4>Chairman's Name </h4>\n         </div>\n         <div class=\"col-12 text-center\">\n            <div class=\"about-desc\">\n               <p>I am pleased that you are considering The POSTE PODAR LEARN SCHOOL among your school choices. This is an important and exciting time in your life. Are you ready to be inspired? Are you willing to work hard and to grow? Are you eager and uninhibited to question and find joy as you learn? If so, then the POSTE PODAR LEARN SCHOOL is the place to be.</p>\n               <p>The curriculum is ever evolving and has a progressive outlook with an intellectual rigour, where a sound foundation of critical thinking and articulating is laid in an environment that encourages curiosity and discovery and all this as you have fun.</p>\n               <p>The extra-curricular activities are varied, enriching and exciting, where you will learn new skills and make life-long friends and associations. You will see yourself increasingly getting involved in visual and performing arts, in debates and sports; as you get enthused you will realise your full potential and learn to appreciate teamwork.</p>\n               <p>In senior classes, you'll have opportunities to take on leadership roles, where you'll learn to accept and handle responsibility, manage and advise others and make fair and effective decisions. You'll help conceive and plan events, assist in labs and libraries, represent your peers; in effect you shall, from a child move towards being a young responsible adult, be a vanguard, an exemplar.</p>\n               <p>The POSTE PODAR LEARN SCHOOL teacher shall be the epitome of all that is good; who is passionate, caring and non-partisan as they seek out the very best within every child.</p>\n               <p>The POSTE PODAR LEARN SCHOOL parent shall be an important part of our community. Their involvement, help and support in enriching lives at homes and on campus will be immeasurable. They will be involved with projects or volunteer their time and effort in any other manner.</p>\n               <p>It would be my pleasure to welcome you and your family to the POSTE PODAR LEARN SCHOOL community. If questions arise as you go through this prospectus, please call or e-mail us.</p>\n               <p class=\"text-right mb-0\">Best wishes,</p>\n               <p class=\"text-right\">POSTE PODAR LERAN SCHOOL UDGIR</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/classes/classes.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/classes/classes.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicClassesClassesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"page-classes\">\n    <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n       <h3 class=\"title-txt text-center w-100 float-left text-white\">Highlights of Classes</h3>\n    </div>\n    <div class=\"container mb-5\">\n       <div class=\"row\">\n          <div class=\"col-12 text-center\">\n            <div class=\"about-desc\">\n                <ul class=\"with-icon\">\n                    <li>Children are encouraged to develop good study habits.</li>\n                    <li>The learning process in the early stages of the Primary School makes use of recreational resources and activity-driven approaches like project method, models, charts, visuals, multi-media, and so on, to strengthen\n                       children's knowledge base and skill sets.\n                    </li>\n                    <li>Children are initiated into reading story books, newspapers and magazines individually as well as in groups through a structured reading programme.</li>\n                    <li>Emphasis is on experiential learning through experimentation, observation, analysis, drawing inferences and discovery to develop scientific temper.</li>\n                    <li>The primary mathematical concepts are developed, focusing on numeracy skills and reasoning ability.</li>\n                    <li>Special emphasis is given on acquiring language skills through active reading and listening programmes, and development of creative and artistic expression.</li>\n                    <li>Children are exposed to new realms of knowledge, new places and learning experiences through educational excursions and field trips.</li>\n                    <li>Children are introduced to new learning experiences and challenges through graded exercises, work sheets, group learning and assignments.</li>\n                    <li>The Primary School curriculum places special emphasis on teaching children the computer skills.</li>\n                    <li>Children are provided opportunities to learn music, dance, drama, painting, etc. to develop multiple intelligences.</li>\n                    <li>Children's creative talent is nurtured through participation in a variety of co-curricular activities and events.</li>\n                    <li>The importance of service to community is instilled in children by developing in them the value of empathy and the spirit of sharing.</li>\n                    <li>Regular sessions are conducted for imparting life skills and values to children.</li>\n                 </ul>\n             </div>\n          </div>\n       </div>\n       <div class=\"clearfix\"></div>\n       <div class=\"row mt-5\">\n          <div class=\"col-lg-12 col-md-12\">\n             <div class=\"abt-title\">\n                <h3 class=\"title-txt\">Our classes</h3>\n             </div>\n          </div>\n          <div class=\"clearfix\"></div>\n            <div class=\"col-lg-4 col-md-6 grid-item filter2\">\n                <div class=\"course-item\">\n                <div class=\"course-img\">\n                    <img src=\"./assets/images/classes/posteabout.jpg\" alt=\"\">\n                    <span class=\"course-value\"><i class=\"fas fa-rupee-sign\"></i> 27,000</span>\n                    <div class=\"course-toolbar\">\n                        <h4 class=\"course-category\"><a href=\"#\">1st Class</a></h4>\n                        <!-- <div class=\"course-date\">\n                            <i class=\"fa fa-calendar\"></i> Start Date 28-06-2017\n                        </div>-->\n                    </div>\n                </div>\n                <div class=\"course-body\">\n                    <div class=\"course-desc\">\n                        <h3 class=\"course-title\"><a href=\"courses-details.html\">Age :- 5/6 Years</a></h3>\n                        <p>\n                            Quality education in the early years of preschool sets a firm foundation in the overall development of a child. At Poste Podar Learn School, the curriculum provides a right array of activities to help children move towards achieving their early learning goals.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"course-footer\">\n                    <div class=\"course-seats\">\n                        <i class=\"fa fa-users\"></i> 70 SEATS\n                    </div>\n                    <div class=\"course-button\">\n                        <a href=\"#\">APPLY NOW</a>\n                    </div>\n                </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 grid-item filter4\">\n                <div class=\"course-item\">\n                   <div class=\"course-img\">\n                      <img src=\"../../assets/images/classes/posteabout1.jpg\" alt=\"\">\n                      <span class=\"course-value\"><i class=\"fas fa-rupee-sign\"></i> 27,000</span>\n                      <div class=\"course-toolbar\">\n                         <h4 class=\"course-category\"><a href=\"#\">2nd Class</a></h4>\n                         <!--<div class=\"course-date\">\n                            <i class=\"fa fa-calendar\"></i> Start Date 28-06-2017\n                         </div>-->\n                      </div>\n                   </div>\n                   <div class=\"course-body\">\n                      <div class=\"course-desc\">\n                         <h3 class=\"course-title\"><a href=\"courses-details.html\">Age :- 6/7 Years</a></h3>\n                         <p>\n                            Quality education in the early years of preschool sets a firm foundation in the overall development of a child. At Poste Podar Learn School, the curriculum  provides a right array of activities to help children move towards achieving their early learning goals.\n                         </p>\n                      </div>\n                   </div>\n                   <div class=\"course-footer\">\n                      <div class=\"course-seats\">\n                         <i class=\"fa fa-users\"></i> 70 SEATS\n                      </div>\n                      <div class=\"course-button\">\n                         <a href=\"#\">APPLY NOW</a>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-lg-4 col-md-6 grid-item filter2\">\n                 <div class=\"course-item\">\n                 <div class=\"course-img\">\n                     <img src=\"./assets/images/classes/posteabout.jpg\" alt=\"\">\n                     <span class=\"course-value\"><i class=\"fas fa-rupee-sign\"></i> 27,000</span>\n                     <div class=\"course-toolbar\">\n                         <h4 class=\"course-category\"><a href=\"#\">3rd Class</a></h4>\n                         <!-- <div class=\"course-date\">\n                             <i class=\"fa fa-calendar\"></i> Start Date 28-06-2017\n                         </div>-->\n                     </div>\n                 </div>\n                 <div class=\"course-body\">\n                     <div class=\"course-desc\">\n                         <h3 class=\"course-title\"><a href=\"courses-details.html\">Age :- 5/6 Years</a></h3>\n                         <p>\n                             Quality education in the early years of preschool sets a firm foundation in the overall development of a child. At Poste Podar Learn School, the curriculum provides a right array of activities to help children move towards achieving their early learning goals.\n                         </p>\n                     </div>\n                 </div>\n                 <div class=\"course-footer\">\n                     <div class=\"course-seats\">\n                         <i class=\"fa fa-users\"></i> 70 SEATS\n                     </div>\n                     <div class=\"course-button\">\n                         <a href=\"#\">APPLY NOW</a>\n                     </div>\n                 </div>\n                 </div>\n             </div>\n       </div>\n    </div>\n </div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/contactus/contactus.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/contactus/contactus.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<section class=\"career\">\n    <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n        <h3 class=\"title-txt text-center w-100 float-left text-white\">Contact Us</h3>\n    </div>\n    <div class=\"container py-xl-5 py-lg-3 w3-agile-services\">\n        <div class=\"row mt-5\">\n            <div class=\"col-sm-4 services-right-grid\">\n              <div class=\"se-top\">\n                <div class=\"services-icon\">\n                <i class=\"icon icon-map-location\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"services-icon-info\">\n                  <h5>Address</h5>\n                  <p>Poste Podar Learn School, Poste Campus,\n                      Nalegaon Road,Malkapur,\n                      Udgir Dist-Latur, (MH) 413517</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 services-right-grid\">\n              <div class=\"se-top\">\n                <div class=\"services-icon\">\n                <i class=\"icon icon-phone-wave\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"services-icon-info\">\n                  <h5>Phone Number</h5>\n                  <p class=\"mb-0\">02385-258003/04</p>\n                  <p>+91-9763450250</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4 services-right-grid\">\n              <div class=\"se-top\">\n                <div class=\"services-icon\">\n                <i class=\"icon icon-envelope\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"services-icon-info\">\n                  <h5>Email Address</h5>\n                  <a href=\"mailto:principal.ppls@podar.org\" target=\"_top\">principal.ppls@podar.org</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"> </div>\n          </div>\n    </div>\n</section>\n<app-footer></app-footer>\n  \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- footer -->\n<div class=\"footer\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t<div class=\"col-md-4 w3layouts_footer_grid\">\n\t\t\t\t\t<h3>About Us</h3>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 w3layouts_footer_grid hpft\">\n\t\t\t\t\t<h3>Site Map</h3>\n                    <ul class=\"con_inner_text\">\n                        <li><a href=\"#\">Home</a></li>\n                        <li><a href=\"#\">Our Vision</a></li>\n                        <li><a href=\"#\">Chairman’s Desk</a></li>\n                        <li><a href=\"#\">Academic Session</a></li>\n                        <li><a href=\"#\">Between Us Portal</a></li>\n                        <li><a href=\"#\">Gallary</a></li>\n                    </ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 w3layouts_footer_grid\">\n\t\t\t\t\t<h3>Site Map</h3>\n                    <ul class=\"con_inner_text\">\n                        <li><a href=\"#\">Our Mission</a></li>\n                        <li><a href=\"#\">Goals for PPLS Student</a></li>\n                        <li><a href=\"#\">Principal’s Desk</a></li>\n                        <li><a href=\"#\">Admission Procedure</a></li>\n                        <li><a href=\"#\">Teacher</a></li>\n                        <li><a href=\"#\">Contact Us</a></li>\n                    </ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"> </div>\t\t\n\t\t\t</div>\t\n\t\t\t</div>\n\t</div>\n\t<p class=\"copyright mb-0\">© 2019. Developed by <a href=\"#\" target=\"_blank\">SSS Webtech</a></p>\n\t<!-- //footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/gallery/gallery.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/gallery/gallery.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<section class=\"team-w3pvts\" id=\"team\">\n    <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n       <h3 class=\"title-txt text-center w-100 float-left text-white\">Our Gallery</h3>\n    </div>\n    <div class=\"container py-xl-5 py-lg-3\">\n        <div class=\"row team-w3pvts-row\">\n            <div class=\"col-lg-3 col-md-6 mb-4 mb-4\" data-toggle=\"modal\" data-target=\"#schoolVisit\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/gallery/03-767x410.png\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">School Visit to Museum</h3>\n                        <span class=\"post\">11 Photos</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">School Visit to Museum</h3>\n                    <span class=\"teacher-post\">11 Photos</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4 mb-4\" data-toggle=\"modal\" data-target=\"#scienceExhibition\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/gallery/08-767x410.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Science Exhibition</h3>\n                        <span class=\"post\">8 Photos</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Science Exhibition</h3>\n                    <span class=\"teacher-post\">8 Photos</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4 mb-4\" data-toggle=\"modal\" data-target=\"#talentCompetition\">\n                <div class=\"box20\">\n                    <img src=\"../../assets/images/gallery/055-767x410.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Talent Competition</h3>\n                        <span class=\"post\">12 Photos</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Talent Competition</h3>\n                    <span class=\"teacher-post\">12 Photos</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- School Visit -->\n<div class=\"modal fade gallery-modal\" id=\"schoolVisit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">School Visit to Museum</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/01-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/02-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/03-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/04-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/055-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/06-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/07-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/08-767x410.jpg\" />\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Science Exhibition -->\n<div class=\"modal fade gallery-modal\" id=\"scienceExhibition\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Science Exhibition</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/01-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/02-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/03-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/04-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/055-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/06-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/07-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/08-767x410.jpg\" />\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Talent Competition -->\n<div class=\"modal fade gallery-modal\" id=\"talentCompetition\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Talent Competition</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/01-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/02-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/03-767x410.png\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/04-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/055-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/06-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/07-767x410.jpg\" />\n                </div>\n                <div class=\"col-12\">\n                    <img src=\"./assets/images/gallery/08-767x410.jpg\" />\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- example 6 - center on mobile -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top bg-white custom-navbar\">\n    <div class=\"d-flex flex-grow-1\">\n        <a class=\"navbar-brand p-0\" href=\"#\">\n            <span class=\"float-left logo-wrapper\">\n                <span class=\"float-left logo\">\n                    <img src=\"./assets/images/public-logo.png\" alt=\"logo\">\n                </span>\n                <span class=\"name float-left\">\n                    <span class=\"float-left school-name\">Poste Podar Learn School,</span>\n                    <span class=\"float-left city-name\">Udgir</span>\n                </span>\n            </span>\n        </a>\n        <div class=\"w-100 text-right\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n        <ul class=\"navbar-nav ml-auto bg-white text-left custom-menu\">\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/home']\" class=\"nav-link m-2 menu-item nav-active\">Home</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link m-2 menu-item dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                About\n              </a>\n              <div class=\"dropdown-menu p-0\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/ourMission']\">Our Mission</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/ourvision']\">Our Vision</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/studentGoals']\">Goals for PPLS Student</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/chairmansDesk']\"> Chairman’s Desk</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/principalsDesk']\"> Principal’s Desk</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/classes']\" class=\"nav-link m-2 menu-item\">Classes</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link m-2 menu-item dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Admission\n              </a>\n              <div class=\"dropdown-menu p-0\" aria-labelledby=\"navbarDropdown\">\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/whyUs']\">Why Choose POSTE PODAR</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/academicSession']\">Academic Session</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/academicProcedure']\">Admission Procedure</a>\n                <a class=\"dropdown-item border-bottom\" [routerLink]=\"['/betweenUsPortal']\"> Between Us Portal</a>\n              </div>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/teachers']\" class=\"nav-link m-2 menu-item\">Teacher</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/gallery']\" class=\"nav-link m-2 menu-item\">Gallery</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/career']\" class=\"nav-link m-2 menu-item\">Career</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/contactUs']\" class=\"nav-link m-2 menu-item\">Contact Us</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/login']\" class=\"nav-link m-2 menu-item\">Login</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/home.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/home.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<!-- Home Slider -->\n<div id=\"carouselExampleIndicators\" class=\"carousel slide custom-slider\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"./assets/images/slider/slider-2.jpg\" class=\"d-block w-100\" alt=\"slide-1\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/images/slider/slider-1.jpg\" class=\"d-block w-100\" alt=\"slide-1\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<!-- services -->\n<div class=\"w3-agile-services\">\n    <div class=\"container p-0\">\n    <div class=\"agileits-services\">\n        <div class=\"services-right-grids row m-0\">\n          <div class=\"col-sm-3 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n                <i class=\"icon icon-university\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>School Infrastructure</h5>\n                <p>To maximize the potential of each student to learn, reduce distractions, enhance focus and remove any form of discomfort or difficulty</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-3 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n              <i class=\"icon icon-book-opened\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>Books & Liberary</h5>\n                <p>With an expansive collection of books on every face of every subject at PPLS take a no-expense-spared approach to stocking the library.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-3 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n              <i class=\"icon icon-user\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>Experienced Staff</h5>\n                <p>Our students get extra ordinary knowledge about curriculum activites, practical knowledge, social activities and personality development.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-3 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n              <i class=\"icon icon-basketball1\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>Sports Lab</h5>\n                <p>It is aimed at developing fundamental skills such as focus, strategic thinking and leadership through the practice of sporting discipline.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"> </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <!-- //services -->\n\n\n<!-- About section -->\n<div class=\"about-1\">\n  <div class=\"container\">\n  <!-- <h3 class=\"title-txt\"><span>A</span>bout Us</h3> -->\n    <div class=\"ab-agile row\">\n      <div class=\"col-md-6 aboutright1\">\n\n        <h3 class=\"title-txt\">Welcome to Education</h3>\n        <div class=\"clearfix\"></div>\n        <img src=\"./assets/images/logo-white.png\" class=\"img-responsive mb-4\" alt=\"\">\n      </div>\n      <div class=\"col-md-6 aboutleft1\">\n        <!-- <p class=\"para1\">Our scholastic record, innovative learning methods and strong commitment to delivering quality through integrity has helped us scale heights that few have managed in the field of education. As a result, PPLS today is a trusted name and an acknowledged leader in the collective effort to shape the future of our children and the nation through its wide network of top schools in India. We welcome you to join the PPLS family and to give your child the best when it comes to an integrated, holistic and empowering learning experience.</p> -->\n        <div class=\"accordion custom-accordion\" id=\"accordionExample\">\n          <div class=\"card bg-transparent border-0 \">\n            <div class=\"card-header border-bottom\" id=\"headingOne\">\n                <p class=\"mb-0\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\"><i class=\"icon icon-shield-check\" aria-hidden=\"true\"></i> Our Values</p>\n            </div>\n        \n            <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n                <ul>\n                  <li>Innovative</li>\n                  <li>Open</li>\n                  <li>Committed</li>\n                  <li>Long-Term</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card bg-transparent border-0\">\n            <div class=\"card-header border-bottom\" id=\"headingTwo\">\n                <p class=\"mb-0\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\"><i class=\"icon icon-shield-check\" aria-hidden=\"true\"></i> Our Mission</p>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n                  To Develope and Equip the children of India for challenges of the 21st Century.\n              </div>\n            </div>\n          </div>\n          <div class=\"card bg-transparent border-0 border-bottom\">\n            <div class=\"card-header border-bottom\" id=\"headingThree\">\n                <p class=\"mb-0\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\"><i class=\"icon icon-shield-check\" aria-hidden=\"true\"></i> Our Vision</p>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n                  To be the best and be recognised as rising the traditional standards of education possibilities and outcomes for students,parents and society.\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>\n  \n<!--Footer Top Starts -->\n<div class=\"w3-agile-services home-bottom-footer position-relative p-0\">\n  <div class=\"container-fluid\">\n    <div class=\"agileits-services\">\n        <div class=\"services-right-grids row m-0\">\n          <div class=\"col-sm-4 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n              <i class=\"icon icon-map-location\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>Address</h5>\n                <p>Poste Podar Learn School, Poste Campus,\n                    Nalegaon Road,Malkapur,\n                    Udgir Dist-Latur, (MH) 413517</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n              <i class=\"icon icon-phone-wave\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>Phone Number</h5>\n                <p class=\"mb-0\">02385-258003/04</p>\n                <p>+91-9763450250</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4 services-right-grid\">\n            <div class=\"se-top\">\n              <div class=\"services-icon\">\n              <i class=\"icon icon-envelope\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"services-icon-info\">\n                <h5>Email Address</h5>\n                <a href=\"mailto:principal.ppls@podar.org\" target=\"_top\">principal.ppls@podar.org</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"clearfix\"> </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n  <!-- Footer top ends -->\n  <app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/our-mission/our-mission.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/our-mission/our-mission.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicOurMissionOurMissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"our-mission\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Our Mission</h3>\n   </div>\n   <div class=\"container our-mission mb-5\">\n      <div class=\"row\">\n         <div class=\"col-12 text-center mb-3 logo-wrapper\">\n            <a [routerLink]=\"['/home']\">\n               <img src=\"./assets/images/logo.png\" alt=\"History Image\">\n            </a>\n         </div>\n         <div class=\"col-12 text-center\">\n            <div class=\"about-desc\">\n               <p>\"To Develope and Equip the children of India.\"</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/our-vision/our-vision.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/our-vision/our-vision.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicOurVisionOurVisionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"our-mission\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Our Vision</h3>\n   </div>\n   <div class=\"container our-mission mb-5\">\n      <div class=\"row\">\n         <div class=\"col-12 text-center mb-3 logo-wrapper\">\n            <a [routerLink]=\"['/home']\">\n               <img src=\"./assets/images/logo.png\" alt=\"History Image\">\n            </a>\n         </div>\n         <div class=\"col-12 text-center\">\n            <div class=\"about-desc\">\n               <p>\"To be the best and be recognised as rising the traditional standards of education possibilities and outcomes for students,parents and society.\"</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/principals-desk/principals-desk.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/principals-desk/principals-desk.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicPrincipalsDeskPrincipalsDeskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"student-vision\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Principal's Desk</h3>\n   </div>\n   <div class=\"container mb-5\">\n      <div class=\"row\">\n         <div class=\"col-12 text-center mb-3 logo-wrapper\">\n            <img src=\"./assets/images/desk/principals-desk.jpg\" style=\"width:300px\" class=\"mb-3\" alt=\"Chairman's Desk\">\n            <p class=\"mb-0\">Principal,</p>\n            <h4>Mr. Suryakant Chavale </h4>\n            <p class=\"mb-4\">POSTE PODAR LEARN SCHOOL UDGIR</p>\n         </div>\n         <div class=\"col-12 text-center\">\n            <div class=\"about-desc\">\n               <p>Greetings! I would like to take this opportunity to welcome all to POSTE PODAR LEARN SCHOOL. As principal, I am very excited about this year as our students continue to progress and our programs refine each year. I am confident that this year will be more eventful.</p>\n               <p>Ours is an open, welcoming and supportive learning community. Numerous challenges allure us with limitless opening as we enter new school year. Chance of better options emerges from the invigorating memories of what has been a remarkable beginning. Now is the time to look ahead and nurture ideas for future. During the course of current session our school intends to become recognized as the premier school engaged in the art of promoting excellence in education for gifted children of rural community to advance their learning and enhance their personal development. We look forward to partner and share a vision of eventful journey based on happiness, compassion and opportunity for all.</p>\n               <p>We are hopeful that our efforts will impact our students and hasten their evolution to reliable global citizens of tomorrow. We guide our students to face the world with empathetic attitude and derive an outlook that appreciates and accepts diversity of opinions with equanimity.</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/student-goals/student-goals.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/student-goals/student-goals.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicStudentGoalsStudentGoalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n <div class=\"student-vision\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">GOALS FOR PPLS STUDENT</h3>\n   </div>\n   <div class=\"container mb-5\">\n      <div class=\"row\">\n         <div class=\"col-12 text-center mb-3 logo-wrapper\">\n            <a [routerLink]=\"['/home']\">\n               <img src=\"./assets/images/logo.png\" alt=\"History Image\">\n            </a>\n         </div>\n         <div class=\"col-12 text-center\">\n            <div class=\"about-desc\">\n               <p>Based on our experience and approach, we have designed a set of goals that we ensure our students achieve by the time they are ready for the next level of learning.</p>\n               <h6>Independent Thinkers</h6>\n               <p>At PPLS , the students from a very young age are trained and encouraged to be independent thinkers and to take on an approach of innovation and ingenuity. Therefore, when faced with a problem or situation, our students do not simply look for ready answers but use their imagination and analytical abilities to create pragmatic solutions.</p>\n               <h6>Communicators</h6>\n               <p>We believe that it is not enough for our children to just have great ideas. It is equally, if not more important that they are able to communicate these ideas effectively. We train our children to be effective communicators, armed with eloquence, assertiveness and clarity in thought to put forth their points with ease and without hesitation, irrespective of the audience or the occasion.</p>\n               <h6>Adaptors</h6>\n               <p>We believe that every Poste Podar student should be able to adapt to the global scenario that they would be a part of – the scenario that is in a constant state of flux – the scenario where change is the only constant. We train the wards in our charge to be steadfast in an ever changing environment and think out of the box, using their skills and core competence to make sure their success is not a probability but certainty.</p>\n               <h6>Modern Citizens</h6>\n               <p>We live in an age where technology has pervaded every single space, right from agriculture to aerospace, economics to policy. The PPLS approach to learning imparts our future generations with the necessary technical know-how and the awareness of the fundamentals of each technology so they are unfazed by changes and always up to the challenge.</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/teachers/teachers.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/teachers/teachers.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicTeachersTeachersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<section class=\"team-w3pvts\" id=\"team\">\n    <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n       <h3 class=\"title-txt text-center w-100 float-left text-white\">Our Teachers</h3>\n    </div>\n    <div class=\"container py-xl-5 py-lg-3\">\n        <div class=\"row team-w3pvts-row\">   \n            <div class=\"col-lg-3 col-md-6 mb-4 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/1.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mr. Surayakant Vinaykrao Chavale</h3>\n                        <span class=\"post\">Principal</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mr. Surayakant Vinaykrao Chavale</h3>\n                    <span class=\"teacher-post\">Principal</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/AnitaMam1.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mrs. Kalpana Somnath Choudhary</h3>\n                        <span class=\"post\">Coordinator</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mrs. Kalpana Somnath Choudhary</h3>\n                    <span class=\"teacher-post\">Coordinator</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/anjummam.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mrs. Saraswati Shivraj Swami</h3>\n                        <span class=\"post\">Mother Teacher</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mrs. Saraswati Shivraj Swami</h3>\n                    <span class=\"teacher-post\">Mother Teacher</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"../../assets/images/teacher/JashanSIr.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mr. Rameshwar Ashok Biradar</h3>\n                        <span class=\"post\">Music Teacher</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mr. Rameshwar Ashok Biradar</h3>\n                    <span class=\"teacher-post\">Music Teacher</span>\n                </div>\n            </div>  \n            <div class=\"col-lg-3 col-md-6 mb-4 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/1.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mr. Surayakant Vinaykrao Chavale</h3>\n                        <span class=\"post\">Principal</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mr. Surayakant Vinaykrao Chavale</h3>\n                    <span class=\"teacher-post\">Principal</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/AnitaMam1.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mrs. Kalpana Somnath Choudhary</h3>\n                        <span class=\"post\">Coordinator</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mrs. Kalpana Somnath Choudhary</h3>\n                    <span class=\"teacher-post\">Coordinator</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/anjummam.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mrs. Saraswati Shivraj Swami</h3>\n                        <span class=\"post\">Mother Teacher</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mrs. Saraswati Shivraj Swami</h3>\n                    <span class=\"teacher-post\">Mother Teacher</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"../../assets/images/teacher/JashanSIr.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mr. Rameshwar Ashok Biradar</h3>\n                        <span class=\"post\">Music Teacher</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mr. Rameshwar Ashok Biradar</h3>\n                    <span class=\"teacher-post\">Music Teacher</span>\n                </div>\n            </div>  \n            <div class=\"col-lg-3 col-md-6 mb-4 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/1.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mr. Surayakant Vinaykrao Chavale</h3>\n                        <span class=\"post\">Principal</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mr. Surayakant Vinaykrao Chavale</h3>\n                    <span class=\"teacher-post\">Principal</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/AnitaMam1.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mrs. Kalpana Somnath Choudhary</h3>\n                        <span class=\"post\">Coordinator</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mrs. Kalpana Somnath Choudhary</h3>\n                    <span class=\"teacher-post\">Coordinator</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"./assets/images/teacher/anjummam.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mrs. Saraswati Shivraj Swami</h3>\n                        <span class=\"post\">Mother Teacher</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mrs. Saraswati Shivraj Swami</h3>\n                    <span class=\"teacher-post\">Mother Teacher</span>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 mb-4\">\n                <div class=\"box20\">\n                    <img src=\"../../assets/images/teacher/JashanSIr.jpg\" alt=\"\" class=\"img-fluid\">\n                    <div class=\"box-content\">\n                        <h3 class=\"title\">Mr. Rameshwar Ashok Biradar</h3>\n                        <span class=\"post\">Music Teacher</span>\n                    </div>\n                </div>\n                <div class=\"teacher-content text-center\">\n                    <h3 class=\"teacher-name\">Mr. Rameshwar Ashok Biradar</h3>\n                    <span class=\"teacher-post\">Music Teacher</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/why-us/why-us.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/why-us/why-us.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicWhyUsWhyUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header class=\"public-header\"></app-header>\n<div class=\"student-vision\">\n   <div class=\"breadcrum position-relative float-left w-100 mb-5\">\n      <h3 class=\"title-txt text-center w-100 float-left text-white\">Why Us</h3>\n   </div>\n   <div class=\"container mb-5\">\n      <div class=\"row\">\n         <div class=\"col-12 text-center mb-3 logo-wrapper\">\n            <a [routerLink]=\"['/home']\">\n               <img src=\"./assets/images/logo.png\" alt=\"History Image\">\n            </a>\n         </div>\n         <div class=\"col-12 text-center\">\n            \n            <div class=\"about-desc\">\n               <p>Our vision has led us to adopt a pervasive and learner-centric teaching methodology that focuses on an <b> Explore – Experience – Implement </b>model of learning that is practiced at all levels of the organization.</p>\n               \n               <h6 class=\"mt-5 mb-3\">Explore</h6>\n               <ul class=\"with-icon\">\n                   <li>Step one of learning starts with exploration.</li>\n                   <li> The neurons in the brain of young children are connecting at a furious pace and need stimulation from the five senses.</li><li> In this stage learning is based on hands on experiences that lead to thinking and logical skills.</li>\n                   <li>Exploring ideas, thoughts, shaping and reshaping projects are all integral aspects of this stage.</li><li> For a learning based project it is important that children immerse in the idea and concept to explore it from all angles.</li>\n                   <li> Our model helps support this exploration</li>\n               </ul>\n\n               <h6 class=\"mt-5 mb-3\">Experience</h6>\n               <ul class=\"with-icon\">\n                   <li>Stage two of learning is shaped with experience.</li>\n                   <li> Having already explored with the senses, in this stage children connect that exploration with past knowledge and create their thoughts and shape their ideas that leads to knowledge and understanding of the world around them.</li>\n                   <li>Analyzing, optimizing, restructuring are some of the high end pre-frontal skills developed at this stage.</li>\n                   <li> John Dewey’s model of “Project Based Learning” along with Jean Piaget’s “Cognitive Learning Theory” are incorporated at this stage to help children experience knowledge with understanding.</li>\n               </ul>\n\n               <h6 class=\"mt-5 mb-3\">Implement</h6>\n               <ul class=\"with-icon\">\n                   <li>Stage three of learning, ‘implementation’, is the goal of all education.</li>\n                   <li> Knowledge is not complete unless it is applied and used to bring about change both in the individual and the society.</li>\n                   <li>At this stage students are encouraged to implement their ideas and bring about a change in their practice and their thinking.</li>\n                   <li> Implementation also helps the students understand ‘what works’ and ‘what does not work’ so that they can work on restructuring and redesigning the idea to suit the needs of the project.</li>\n                   <li>At the implementation stage students are encouraged to be independent and experience opportunities of success that help define their self-worth and self-esteem.</li>\n               </ul>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-footer/super-footer.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-footer/super-footer.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminCommonSuperFooterSuperFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-wrap-layout1\">\n    <div class=\"copyright bg-transparent text-left\">© 2019 Copyrights <a href=\"#\">SSS Webtech Solutions</a> . All rights reserved. </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-header/super-header.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-header/super-header.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminCommonSuperHeaderSuperHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Header Menu Area Start Here -->\n<div class=\"navbar navbar-expand-md header-menu-one bg-light fixed-top\">\n    <div class=\"nav-bar-header-one\">\n        <div class=\"header-logo\">\n            <a href=\"index.html\">\n                <img src=\"./assets/images/logo.png\" alt=\"logo\">\n            </a>\n        </div>\n            <div class=\"toggle-button sidebar-toggle\">\n            <button type=\"button\" class=\"item-link\">\n                <span class=\"btn-icon-wrap\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </span>\n            </button>\n        </div>\n    </div>\n    <div class=\"d-md-none mobile-nav-bar\">\n        <button class=\"navbar-toggler pulse-animation\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mobile-navbar\" aria-expanded=\"false\">\n            <i class=\"far fa-arrow-alt-circle-down\"></i>\n        </button>\n        <button type=\"button\" class=\"navbar-toggler sidebar-toggle-mobile\">\n            <i class=\"fas fa-bars\"></i>\n        </button>\n    </div>\n    <div class=\"header-main-menu collapse navbar-collapse p-0\" id=\"mobile-navbar\">\n        <!-- <ul class=\"navbar-nav\">\n            <li class=\"navbar-item header-search-bar\">\n                <div class=\"input-group stylish-input-group\">\n                    <span class=\"input-group-addon\">\n                        <button type=\"submit\">\n                            <span class=\"flaticon-search\" aria-hidden=\"true\"></span>\n                        </button>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Find Something . . .\">\n                </div>\n            </li>\n        </ul> -->\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"navbar-item dropdown header-admin\">\n                <a class=\"navbar-nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\"\n                    aria-expanded=\"false\">\n                    <div class=\"admin-title\">\n                        <h5 class=\"item-title\">SSS Webtech</h5>\n                        <span>Super Admin</span>\n                    </div>\n                    <div class=\"admin-img\">\n                        <img src=\"./assets/images/figure/admin.jpg\" alt=\"Admin\">\n                    </div>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <div class=\"item-header\">\n                        <h6 class=\"item-title\">SSS Webtech</h6>\n                    </div>\n                    <div class=\"item-content\">\n                        <ul class=\"settings-list\">\n                            <li><a><i class=\"flaticon-user\"></i>My Profile</a></li>\n                            <li><a [routerLink]=\"['/login']\"><i class=\"flaticon-turn-off\"></i>Log Out</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </li>\n            \n        </ul>\n    </div>\n</div>\n<!-- Header Menu Area End Here -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-sidebar/super-sidebar.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-sidebar/super-sidebar.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminCommonSuperSidebarSuperSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Sidebar Area Start Here -->\n<div class=\"sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color\">\n    <div class=\"mobile-sidebar-header d-md-none\">\n            <div class=\"header-logo\">\n                <a href=\"index.html\"><img src=\"./assets/images/logo.png\" alt=\"logo\"></a>\n            </div>\n    </div>\n    \n        <div class=\"sidebar-menu-content\">\n            <ul class=\"nav nav-sidebar-menu sidebar-toggle-view\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/super-dashboard']\"><i class=\"icon icon-library2\"></i><span>Dashboard</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/super-school']\"><i class=\"icon icon-building\"></i><span>Schools</span></a>\n                </li>\n                <li class=\"nav-item\">\n                <a class=\"nav-link\"><i class=\"icon icon-envelope\"></i><span>Chat</span></a>\n            </li>\n            </ul>\n        </div>\n    </div>\n    <!-- Sidebar Area End Here -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-dashboard/super-dashboard.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-dashboard/super-dashboard.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminSuperDashboardSuperDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-super-header></app-super-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-super-sidebar></app-super-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>Super Dashboard</h3>\n            <ul>\n                <li>Dashboard</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-green \">\n                                <i class=\"icon icon-building text-green\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Institutes</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"12\">12</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-red\">\n                                <i class=\"icon-building text-red\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Disabled</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"2\">2</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-blue\">\n                                <i class=\"icon icon-user-lock text-blue\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Teachers</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"250\">250</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow\">\n                                <i class=\"icon icon-user-lock text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Parents</div>\n                                <div class=\"item-number\"><span class=\"counter\" data-num=\"10690\">10690</span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-super-footer></app-super-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-add/super-school-add.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-add/super-school-add.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminSuperSchoolAddSuperSchoolAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-super-header></app-super-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-super-sidebar></app-super-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"row\">\n            <div class=\"col-12 col-md-8\">\n                <div class=\"breadcrumbs-area\">\n                    <h3>Add Schools</h3>\n                    <ul>\n                        <li><a [routerLink]=\"['/super-dashboard']\">Dashboard</a></li>\n                        <li><a [routerLink]=\"['/super-school']\">School Management</a></li>\n                        <li>Add Schools</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card dashboard-card-eleven\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School Full Name *</label>\n                                    <input type=\"text\" value=\"Modern Kids School\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Type *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Free</option>\n                                        <option value=\"2\">Basic</option>\n                                        <option value=\"3\">Premium</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin User Name *</label>\n                                    <input type=\"text\" value=\"Pankaj Pede\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin Contact No. </label>\n                                    <input type=\"number\" value=\"9561311757\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin User Email</label>\n                                    <input type=\"email\" value=\"pede.pankaj@gmail.com\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person Name *</label>\n                                    <input type=\"text\" value=\"Swapnil Sangale\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person No. *</label>\n                                    <input type=\"number\" value=\"7588611478\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person Email</label>\n                                    <input type=\"email\" value=\"pede.pankaj@gmail.com\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Registed Date *</label>\n                                    <input type=\"text\" value=\"28-12-2019\" class=\"form-control air-datepicker\"\n                                        data-position='bottom right'>\n                                    <i class=\"far fa-calendar-alt\"></i>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Expire Date </label>\n                                    <input type=\"text\" value=\"28-12-2020\" class=\"form-control air-datepicker\"\n                                        data-position='bottom right'>\n                                    <i class=\"far fa-calendar-alt\"></i>\n                                    \n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Total Student Limit *</label>\n                                    <input type=\"number\" value=\"60\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Free Student No *</label>\n                                    <input type=\"number\" value=\"30\" class=\"form-control\">\n                                </div>   \n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Bulk Student Upload *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>SMS Notification *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Export Funcationality *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Attendance Excel upload *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-12 col-lg-6 col-12 form-group\">\n                                    <label>Menus Option *</label>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Notification\">Notification\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Chat\">Chat\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Library\">Library\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Complaints\">Complaints\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Gallery\">Gallery\n                                        </label>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Save</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-super-footer></app-super-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-edit/super-school-edit.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-edit/super-school-edit.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminSuperSchoolEditSuperSchoolEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-super-header></app-super-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-super-sidebar></app-super-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"row\">\n            <div class=\"col-12 col-md-8\">\n                <div class=\"breadcrumbs-area\">\n                    <h3>View School Details</h3>\n                    <ul>\n                        <li><a [routerLink]=\"['/super-dashboard']\">Dashboard</a></li>\n                        <li><a [routerLink]=\"['/super-school']\">School Management</a></li>\n                        <li><a [routerLink]=\"['/super-school-list']\">School List</a></li>\n                        <li>View School Details</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card dashboard-card-eleven\">\n                    <div class=\"card-body\">\n                        <form class=\"new-added-form\">\n                            <div class=\"row\">\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>School Full Name *</label>\n                                    <input type=\"text\" value=\"Modern Kids School\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Type *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Free</option>\n                                        <option value=\"2\">Basic</option>\n                                        <option value=\"3\">Premium</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin User Name *</label>\n                                    <input type=\"text\" value=\"Pankaj Pede\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin Contact No. </label>\n                                    <input type=\"number\" value=\"9561311757\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Admin User Email</label>\n                                    <input type=\"email\" value=\"pede.pankaj@gmail.com\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person Name *</label>\n                                    <input type=\"text\" value=\"Swapnil Sangale\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person No. *</label>\n                                    <input type=\"number\" value=\"7588611478\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Contact Person Email</label>\n                                    <input type=\"email\" value=\"pede.pankaj@gmail.com\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Registed Date *</label>\n                                    <input type=\"text\" value=\"28-12-2019\" class=\"form-control air-datepicker\"\n                                        data-position='bottom right'>\n                                    <i class=\"far fa-calendar-alt\"></i>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Expire Date </label>\n                                    <input type=\"text\" value=\"28-12-2020\" class=\"form-control air-datepicker\"\n                                        data-position='bottom right'>\n                                    <i class=\"far fa-calendar-alt\"></i>\n                                    \n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Total Student Limit *</label>\n                                    <input type=\"number\" value=\"60\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Free Student No *</label>\n                                    <input type=\"number\" value=\"30\" class=\"form-control\">\n                                </div>   \n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Bulk Student Upload *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>SMS Notification *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Export Funcationality *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-3 col-lg-6 col-12 form-group\">\n                                    <label>Attendance Excel upload *</label>\n                                    <select class=\"form-control\">\n                                        <option value=\"\">SelectType *</option>\n                                        <option value=\"1\" selected>Yes</option>\n                                        <option value=\"2\">No</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-xl-12 col-lg-6 col-12 form-group\">\n                                    <label>Menus Option *</label>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Notification\">Notification\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Chat\">Chat\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Library\">Library\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Complaints\">Complaints\n                                        </label>\n                                    </div>\n                                    <div class=\"form-check\">\n                                        <label class=\"form-check-label\">\n                                            <input type=\"checkbox\" class=\"form-check-input\" value=\"Gallery\">Gallery\n                                        </label>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"col-12 form-group mg-t-8\">\n                                    <button type=\"submit\" class=\"btn-fill-lg bg-blue-dark\">Save</button>\n                                    <button type=\"reset\" class=\"btn-fill-lg btn-outline-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-super-footer></app-super-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-list/super-school-list.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-list/super-school-list.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminSuperSchoolListSuperSchoolListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-super-header></app-super-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-super-sidebar></app-super-sidebar>\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"row\">\n            <div class=\"col-12 col-md-8\">\n                <div class=\"breadcrumbs-area\">\n                    <h3>Schools List</h3>\n                    <ul>\n                        <li><a [routerLink]=\"['/super-dashboard']\">Dashboard</a></li>\n                        <li><a [routerLink]=\"['/super-school']\">School Management</a></li>\n                        <li>Schools List</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- User Grid -->\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"card dashboard-card-eleven\">\n                    <div class=\"card-body\">\n                        <div class=\"table-box-wrap\">\n                            <div class=\"table-responsive expenses-table-box\">\n                                <table id=\"registeredSchools\" datatable class=\"table table-hover display text-nowrap\" style=\"width:100%\">\n                                    <thead>\n                                        <tr>\n                                            <th>School Name</th>\n                                            <th>Contact No.</th>\n                                            <th>User Type</th>\n                                            <th>Reg. Date</th>\n                                            <th>Expire Date</th>\n                                            <th>Status</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Poste Podar International School</td>\n                                            <td>9876543210</td>\n                                            <td>Premium</td>\n                                            <td>29/12-2019</td>\n                                            <td>28/12/2019</td>\n                                            <td>\n                                                <div class=\"switch-field\">\n                                                    <input type=\"radio\" id=\"poste1\" name=\"switch1\" value=\"yes\" />\n                                                    <label for=\"poste1\">Enable</label>\n                                                    <input type=\"radio\" id=\"poste2\" name=\"switch1\" value=\"no\" checked />\n                                                    <label for=\"poste2\">Disable</label>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <a [routerLink]=\"['/super-school-edit']\" class=\"btn rounded-0 btn-gradient-yellow mr-2\">View Details</a>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>Modern Kids School</td>\n                                            <td>8765432109</td>\n                                            <td>Basic</td>\n                                            <td>03/01-2020</td>\n                                            <td>03/01-2021</td>\n                                            <td>\n                                                <div class=\"switch-field\">\n                                                    <input type=\"radio\" id=\"modern1\" name=\"switch2\" value=\"yes\" checked/>\n                                                    <label for=\"modern1\">Enable</label>\n                                                    <input type=\"radio\" id=\"modern2\" name=\"switch2\" value=\"no\" />\n                                                    <label for=\"modern2\">Disable</label>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <a [routerLink]=\"['/super-school-edit']\" class=\"btn rounded-0 btn-gradient-yellow mr-2\">View Details</a>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>Sawitri Bai Public School</td>\n                                            <td>8976543210</td>\n                                            <td>Free</td>\n                                            <td>10/01-2020</td>\n                                            <td>10/01-2021</td>\n                                            <td>\n                                                <div class=\"switch-field\">\n                                                    <input type=\"radio\" id=\"sawitri1\" name=\"switch3\" value=\"yes\" checked/>\n                                                    <label for=\"sawitri1\">Enable</label>\n                                                    <input type=\"radio\" id=\"sawitri2\" name=\"switch3\" value=\"no\" />\n                                                    <label for=\"sawitri2\">Disable</label>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <a [routerLink]=\"['/super-school-edit']\" class=\"btn rounded-0 btn-gradient-yellow mr-2\">View Details</a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <app-super-footer></app-super-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school/super-school.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school/super-school.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminSuperSchoolSuperSchoolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-super-header></app-super-header>\n<!-- Page Area Start Here -->\n<div class=\"dashboard-page-one\">\n    <app-super-sidebar></app-super-sidebar>\n\n    <div class=\"dashboard-content-one\">\n\n        <div class=\"breadcrumbs-area\">\n            <h3>School Management</h3>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['/admin-dashboard']\">Dashoboard</a>\n                </li>\n                <li>School Management</li>\n            </ul>\n        </div>\n\n        <!-- Statistics -->\n        <div class=\"row gutters-20\">\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/super-school-list']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Manage School</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-3 col-sm-6 col-12\" [routerLink]=\"['/super-school-add']\">\n                <div class=\"dashboard-summery-one mg-b-20\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-6\">\n                            <div class=\"item-icon bg-light-yellow \">\n                                <i class=\"icon icon-alarm-add2 text-orange\"></i>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"item-content\">\n                                <div class=\"item-title\">Add School</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-super-footer></app-super-footer>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAcademiccalendarCreateAdminAcademiccalendarCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFjYWRlbWljY2FsZW5kYXItY3JlYXRlL2FkbWluLWFjYWRlbWljY2FsZW5kYXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AdminAcademiccalendarCreateComponent */

  /***/
  function srcAppAdminAdminAcademiccalendarCreateAdminAcademiccalendarCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAcademiccalendarCreateComponent", function () {
      return AdminAcademiccalendarCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAcademiccalendarCreateComponent =
    /*#__PURE__*/
    function () {
      function AdminAcademiccalendarCreateComponent() {
        _classCallCheck(this, AdminAcademiccalendarCreateComponent);
      }

      _createClass(AdminAcademiccalendarCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAcademiccalendarCreateComponent;
    }();

    AdminAcademiccalendarCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-academiccalendar-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-academiccalendar-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-academiccalendar-create.component.scss */
      "./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.scss")).default]
    })], AdminAcademiccalendarCreateComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAcademiccalendarFullcalendarAdminAcademiccalendarFullcalendarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFjYWRlbWljY2FsZW5kYXItZnVsbGNhbGVuZGFyL2FkbWluLWFjYWRlbWljY2FsZW5kYXItZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: AdminAcademiccalendarFullcalendarComponent */

  /***/
  function srcAppAdminAdminAcademiccalendarFullcalendarAdminAcademiccalendarFullcalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAcademiccalendarFullcalendarComponent", function () {
      return AdminAcademiccalendarFullcalendarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAcademiccalendarFullcalendarComponent =
    /*#__PURE__*/
    function () {
      function AdminAcademiccalendarFullcalendarComponent() {
        _classCallCheck(this, AdminAcademiccalendarFullcalendarComponent);
      }

      _createClass(AdminAcademiccalendarFullcalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAcademiccalendarFullcalendarComponent;
    }();

    AdminAcademiccalendarFullcalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-academiccalendar-fullcalendar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-academiccalendar-fullcalendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-academiccalendar-fullcalendar.component.scss */
      "./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.scss")).default]
    })], AdminAcademiccalendarFullcalendarComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAcademiccalendarAdminAcademiccalendarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFjYWRlbWljY2FsZW5kYXIvYWRtaW4tYWNhZGVtaWNjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AdminAcademiccalendarComponent */

  /***/
  function srcAppAdminAdminAcademiccalendarAdminAcademiccalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAcademiccalendarComponent", function () {
      return AdminAcademiccalendarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAcademiccalendarComponent =
    /*#__PURE__*/
    function () {
      function AdminAcademiccalendarComponent() {
        _classCallCheck(this, AdminAcademiccalendarComponent);
      }

      _createClass(AdminAcademiccalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAcademiccalendarComponent;
    }();

    AdminAcademiccalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-academiccalendar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-academiccalendar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-academiccalendar.component.scss */
      "./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.scss")).default]
    })], AdminAcademiccalendarComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAttendanceAttendanceanalysisAdminAttendanceAttendanceanalysisComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWF0dGVuZGFuY2UtYXR0ZW5kYW5jZWFuYWx5c2lzL2FkbWluLWF0dGVuZGFuY2UtYXR0ZW5kYW5jZWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: AdminAttendanceAttendanceanalysisComponent */

  /***/
  function srcAppAdminAdminAttendanceAttendanceanalysisAdminAttendanceAttendanceanalysisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAttendanceAttendanceanalysisComponent", function () {
      return AdminAttendanceAttendanceanalysisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAttendanceAttendanceanalysisComponent =
    /*#__PURE__*/
    function () {
      function AdminAttendanceAttendanceanalysisComponent() {
        _classCallCheck(this, AdminAttendanceAttendanceanalysisComponent);
      }

      _createClass(AdminAttendanceAttendanceanalysisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAttendanceAttendanceanalysisComponent;
    }();

    AdminAttendanceAttendanceanalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-attendance-attendanceanalysis',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-attendance-attendanceanalysis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-attendance-attendanceanalysis.component.scss */
      "./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.scss")).default]
    })], AdminAttendanceAttendanceanalysisComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAttendanceLeaveapplicationAdminAttendanceLeaveapplicationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWF0dGVuZGFuY2UtbGVhdmVhcHBsaWNhdGlvbi9hZG1pbi1hdHRlbmRhbmNlLWxlYXZlYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdminAttendanceLeaveapplicationComponent */

  /***/
  function srcAppAdminAdminAttendanceLeaveapplicationAdminAttendanceLeaveapplicationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAttendanceLeaveapplicationComponent", function () {
      return AdminAttendanceLeaveapplicationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAttendanceLeaveapplicationComponent =
    /*#__PURE__*/
    function () {
      function AdminAttendanceLeaveapplicationComponent() {
        _classCallCheck(this, AdminAttendanceLeaveapplicationComponent);
      }

      _createClass(AdminAttendanceLeaveapplicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAttendanceLeaveapplicationComponent;
    }();

    AdminAttendanceLeaveapplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-attendance-leaveapplication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-attendance-leaveapplication.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-attendance-leaveapplication.component.scss */
      "./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.scss")).default]
    })], AdminAttendanceLeaveapplicationComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAttendanceNewattendanceAdminAttendanceNewattendanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWF0dGVuZGFuY2UtbmV3YXR0ZW5kYW5jZS9hZG1pbi1hdHRlbmRhbmNlLW5ld2F0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AdminAttendanceNewattendanceComponent */

  /***/
  function srcAppAdminAdminAttendanceNewattendanceAdminAttendanceNewattendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAttendanceNewattendanceComponent", function () {
      return AdminAttendanceNewattendanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAttendanceNewattendanceComponent =
    /*#__PURE__*/
    function () {
      function AdminAttendanceNewattendanceComponent() {
        _classCallCheck(this, AdminAttendanceNewattendanceComponent);
      }

      _createClass(AdminAttendanceNewattendanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAttendanceNewattendanceComponent;
    }();

    AdminAttendanceNewattendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-attendance-newattendance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-attendance-newattendance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-attendance-newattendance.component.scss */
      "./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.scss")).default]
    })], AdminAttendanceNewattendanceComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance/admin-attendance.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-attendance/admin-attendance.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAttendanceAdminAttendanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWF0dGVuZGFuY2UvYWRtaW4tYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-attendance/admin-attendance.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-attendance/admin-attendance.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AdminAttendanceComponent */

  /***/
  function srcAppAdminAdminAttendanceAdminAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAttendanceComponent", function () {
      return AdminAttendanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminAttendanceComponent =
    /*#__PURE__*/
    function () {
      function AdminAttendanceComponent() {
        _classCallCheck(this, AdminAttendanceComponent);
      }

      _createClass(AdminAttendanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAttendanceComponent;
    }();

    AdminAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-attendance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-attendance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-attendance/admin-attendance.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-attendance.component.scss */
      "./src/app/admin/admin-attendance/admin-attendance.component.scss")).default]
    })], AdminAttendanceComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-chat/admin-chat.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-chat/admin-chat.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminChatAdminChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNoYXQvYWRtaW4tY2hhdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-chat/admin-chat.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/admin-chat/admin-chat.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdminChatComponent */

  /***/
  function srcAppAdminAdminChatAdminChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminChatComponent", function () {
      return AdminChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminChatComponent =
    /*#__PURE__*/
    function () {
      function AdminChatComponent() {
        _classCallCheck(this, AdminChatComponent);
      }

      _createClass(AdminChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminChatComponent;
    }();

    AdminChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-chat/admin-chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-chat.component.scss */
      "./src/app/admin/admin-chat/admin-chat.component.scss")).default]
    })], AdminChatComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationAboutschoolAdminConfigurationAboutschoolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tYWJvdXRzY2hvb2wvYWRtaW4tY29uZmlndXJhdGlvbi1hYm91dHNjaG9vbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: AdminConfigurationAboutschoolComponent */

  /***/
  function srcAppAdminAdminConfigurationAboutschoolAdminConfigurationAboutschoolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationAboutschoolComponent", function () {
      return AdminConfigurationAboutschoolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationAboutschoolComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationAboutschoolComponent() {
        _classCallCheck(this, AdminConfigurationAboutschoolComponent);
      }

      _createClass(AdminConfigurationAboutschoolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationAboutschoolComponent;
    }();

    AdminConfigurationAboutschoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-aboutschool',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-aboutschool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-aboutschool.component.scss */
      "./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.scss")).default]
    })], AdminConfigurationAboutschoolComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationApplicationlabelAdminConfigurationApplicationlabelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tYXBwbGljYXRpb25sYWJlbC9hZG1pbi1jb25maWd1cmF0aW9uLWFwcGxpY2F0aW9ubGFiZWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: AdminConfigurationApplicationlabelComponent */

  /***/
  function srcAppAdminAdminConfigurationApplicationlabelAdminConfigurationApplicationlabelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationApplicationlabelComponent", function () {
      return AdminConfigurationApplicationlabelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationApplicationlabelComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationApplicationlabelComponent() {
        _classCallCheck(this, AdminConfigurationApplicationlabelComponent);
      }

      _createClass(AdminConfigurationApplicationlabelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationApplicationlabelComponent;
    }();

    AdminConfigurationApplicationlabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-applicationlabel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-applicationlabel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-applicationlabel.component.scss */
      "./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.scss")).default]
    })], AdminConfigurationApplicationlabelComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationAssignsubjectAdminConfigurationAssignsubjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tYXNzaWduc3ViamVjdC9hZG1pbi1jb25maWd1cmF0aW9uLWFzc2lnbnN1YmplY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdminConfigurationAssignsubjectComponent */

  /***/
  function srcAppAdminAdminConfigurationAssignsubjectAdminConfigurationAssignsubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationAssignsubjectComponent", function () {
      return AdminConfigurationAssignsubjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationAssignsubjectComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationAssignsubjectComponent() {
        _classCallCheck(this, AdminConfigurationAssignsubjectComponent);
      }

      _createClass(AdminConfigurationAssignsubjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationAssignsubjectComponent;
    }();

    AdminConfigurationAssignsubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-assignsubject',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-assignsubject.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-assignsubject.component.scss */
      "./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.scss")).default]
    })], AdminConfigurationAssignsubjectComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationAssignteacherAdminConfigurationAssignteacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tYXNzaWdudGVhY2hlci9hZG1pbi1jb25maWd1cmF0aW9uLWFzc2lnbnRlYWNoZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdminConfigurationAssignteacherComponent */

  /***/
  function srcAppAdminAdminConfigurationAssignteacherAdminConfigurationAssignteacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationAssignteacherComponent", function () {
      return AdminConfigurationAssignteacherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationAssignteacherComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationAssignteacherComponent() {
        _classCallCheck(this, AdminConfigurationAssignteacherComponent);
      }

      _createClass(AdminConfigurationAssignteacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationAssignteacherComponent;
    }();

    AdminConfigurationAssignteacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-assignteacher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-assignteacher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-assignteacher.component.scss */
      "./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.scss")).default]
    })], AdminConfigurationAssignteacherComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationAttendanceeditingAdminConfigurationAttendanceeditingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tYXR0ZW5kYW5jZWVkaXRpbmcvYWRtaW4tY29uZmlndXJhdGlvbi1hdHRlbmRhbmNlZWRpdGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: AdminConfigurationAttendanceeditingComponent */

  /***/
  function srcAppAdminAdminConfigurationAttendanceeditingAdminConfigurationAttendanceeditingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationAttendanceeditingComponent", function () {
      return AdminConfigurationAttendanceeditingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationAttendanceeditingComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationAttendanceeditingComponent() {
        _classCallCheck(this, AdminConfigurationAttendanceeditingComponent);
      }

      _createClass(AdminConfigurationAttendanceeditingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationAttendanceeditingComponent;
    }();

    AdminConfigurationAttendanceeditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-attendanceediting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-attendanceediting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-attendanceediting.component.scss */
      "./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.scss")).default]
    })], AdminConfigurationAttendanceeditingComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationFeesAdminConfigurationFeesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tZmVlcy9hZG1pbi1jb25maWd1cmF0aW9uLWZlZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AdminConfigurationFeesComponent */

  /***/
  function srcAppAdminAdminConfigurationFeesAdminConfigurationFeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationFeesComponent", function () {
      return AdminConfigurationFeesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationFeesComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationFeesComponent() {
        _classCallCheck(this, AdminConfigurationFeesComponent);
      }

      _createClass(AdminConfigurationFeesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationFeesComponent;
    }();

    AdminConfigurationFeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-fees',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-fees.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-fees.component.scss */
      "./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.scss")).default]
    })], AdminConfigurationFeesComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationHomesliderAdminConfigurationHomesliderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24taG9tZXNsaWRlci9hZG1pbi1jb25maWd1cmF0aW9uLWhvbWVzbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AdminConfigurationHomesliderComponent */

  /***/
  function srcAppAdminAdminConfigurationHomesliderAdminConfigurationHomesliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationHomesliderComponent", function () {
      return AdminConfigurationHomesliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationHomesliderComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationHomesliderComponent() {
        _classCallCheck(this, AdminConfigurationHomesliderComponent);
      }

      _createClass(AdminConfigurationHomesliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationHomesliderComponent;
    }();

    AdminConfigurationHomesliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-homeslider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-homeslider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-homeslider.component.scss */
      "./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.scss")).default]
    })], AdminConfigurationHomesliderComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationInstituteclassAdminConfigurationInstituteclassComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24taW5zdGl0dXRlY2xhc3MvYWRtaW4tY29uZmlndXJhdGlvbi1pbnN0aXR1dGVjbGFzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: AdminConfigurationInstituteclassComponent */

  /***/
  function srcAppAdminAdminConfigurationInstituteclassAdminConfigurationInstituteclassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationInstituteclassComponent", function () {
      return AdminConfigurationInstituteclassComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationInstituteclassComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationInstituteclassComponent() {
        _classCallCheck(this, AdminConfigurationInstituteclassComponent);
      }

      _createClass(AdminConfigurationInstituteclassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationInstituteclassComponent;
    }();

    AdminConfigurationInstituteclassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-instituteclass',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-instituteclass.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-instituteclass.component.scss */
      "./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.scss")).default]
    })], AdminConfigurationInstituteclassComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.scss":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.scss ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationInstitutecommitteeAdminConfigurationInstitutecommitteeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24taW5zdGl0dXRlY29tbWl0dGVlL2FkbWluLWNvbmZpZ3VyYXRpb24taW5zdGl0dXRlY29tbWl0dGVlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: AdminConfigurationInstitutecommitteeComponent */

  /***/
  function srcAppAdminAdminConfigurationInstitutecommitteeAdminConfigurationInstitutecommitteeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationInstitutecommitteeComponent", function () {
      return AdminConfigurationInstitutecommitteeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationInstitutecommitteeComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationInstitutecommitteeComponent() {
        _classCallCheck(this, AdminConfigurationInstitutecommitteeComponent);
      }

      _createClass(AdminConfigurationInstitutecommitteeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationInstitutecommitteeComponent;
    }();

    AdminConfigurationInstitutecommitteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-institutecommittee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-institutecommittee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-institutecommittee.component.scss */
      "./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.scss")).default]
    })], AdminConfigurationInstitutecommitteeComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationInstitutedepartmentAdminConfigurationInstitutedepartmentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24taW5zdGl0dXRlZGVwYXJ0bWVudC9hZG1pbi1jb25maWd1cmF0aW9uLWluc3RpdHV0ZWRlcGFydG1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: AdminConfigurationInstitutedepartmentComponent */

  /***/
  function srcAppAdminAdminConfigurationInstitutedepartmentAdminConfigurationInstitutedepartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationInstitutedepartmentComponent", function () {
      return AdminConfigurationInstitutedepartmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationInstitutedepartmentComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationInstitutedepartmentComponent() {
        _classCallCheck(this, AdminConfigurationInstitutedepartmentComponent);
      }

      _createClass(AdminConfigurationInstitutedepartmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationInstitutedepartmentComponent;
    }();

    AdminConfigurationInstitutedepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-institutedepartment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-institutedepartment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-institutedepartment.component.scss */
      "./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.scss")).default]
    })], AdminConfigurationInstitutedepartmentComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationInstitutedivisionAdminConfigurationInstitutedivisionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24taW5zdGl0dXRlZGl2aXNpb24vYWRtaW4tY29uZmlndXJhdGlvbi1pbnN0aXR1dGVkaXZpc2lvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: AdminConfigurationInstitutedivisionComponent */

  /***/
  function srcAppAdminAdminConfigurationInstitutedivisionAdminConfigurationInstitutedivisionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationInstitutedivisionComponent", function () {
      return AdminConfigurationInstitutedivisionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationInstitutedivisionComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationInstitutedivisionComponent() {
        _classCallCheck(this, AdminConfigurationInstitutedivisionComponent);
      }

      _createClass(AdminConfigurationInstitutedivisionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationInstitutedivisionComponent;
    }();

    AdminConfigurationInstitutedivisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-institutedivision',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-institutedivision.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-institutedivision.component.scss */
      "./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.scss")).default]
    })], AdminConfigurationInstitutedivisionComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationSecondaryadminAdminConfigurationSecondaryadminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tc2Vjb25kYXJ5YWRtaW4vYWRtaW4tY29uZmlndXJhdGlvbi1zZWNvbmRhcnlhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: AdminConfigurationSecondaryadminComponent */

  /***/
  function srcAppAdminAdminConfigurationSecondaryadminAdminConfigurationSecondaryadminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationSecondaryadminComponent", function () {
      return AdminConfigurationSecondaryadminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationSecondaryadminComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationSecondaryadminComponent() {
        _classCallCheck(this, AdminConfigurationSecondaryadminComponent);
      }

      _createClass(AdminConfigurationSecondaryadminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationSecondaryadminComponent;
    }();

    AdminConfigurationSecondaryadminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-secondaryadmin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-secondaryadmin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-secondaryadmin.component.scss */
      "./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.scss")).default]
    })], AdminConfigurationSecondaryadminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationSubjectmanagementAdminConfigurationSubjectmanagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24tc3ViamVjdG1hbmFnZW1lbnQvYWRtaW4tY29uZmlndXJhdGlvbi1zdWJqZWN0bWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: AdminConfigurationSubjectmanagementComponent */

  /***/
  function srcAppAdminAdminConfigurationSubjectmanagementAdminConfigurationSubjectmanagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationSubjectmanagementComponent", function () {
      return AdminConfigurationSubjectmanagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationSubjectmanagementComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationSubjectmanagementComponent() {
        _classCallCheck(this, AdminConfigurationSubjectmanagementComponent);
      }

      _createClass(AdminConfigurationSubjectmanagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationSubjectmanagementComponent;
    }();

    AdminConfigurationSubjectmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration-subjectmanagement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration-subjectmanagement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration-subjectmanagement.component.scss */
      "./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.scss")).default]
    })], AdminConfigurationSubjectmanagementComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration/admin-configuration.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-configuration/admin-configuration.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfigurationAdminConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpZ3VyYXRpb24vYWRtaW4tY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-configuration/admin-configuration.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-configuration/admin-configuration.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AdminConfigurationComponent */

  /***/
  function srcAppAdminAdminConfigurationAdminConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfigurationComponent", function () {
      return AdminConfigurationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfigurationComponent =
    /*#__PURE__*/
    function () {
      function AdminConfigurationComponent() {
        _classCallCheck(this, AdminConfigurationComponent);
      }

      _createClass(AdminConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfigurationComponent;
    }();

    AdminConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-configuration/admin-configuration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-configuration.component.scss */
      "./src/app/admin/admin-configuration/admin-configuration.component.scss")).default]
    })], AdminConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfirmadmindetailsAdminConfirmadmindetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpcm1hZG1pbmRldGFpbHMvYWRtaW4tY29uZmlybWFkbWluZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AdminConfirmadmindetailsComponent */

  /***/
  function srcAppAdminAdminConfirmadmindetailsAdminConfirmadmindetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfirmadmindetailsComponent", function () {
      return AdminConfirmadmindetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfirmadmindetailsComponent =
    /*#__PURE__*/
    function () {
      function AdminConfirmadmindetailsComponent() {
        _classCallCheck(this, AdminConfirmadmindetailsComponent);
      }

      _createClass(AdminConfirmadmindetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfirmadmindetailsComponent;
    }();

    AdminConfirmadmindetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-confirmadmindetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-confirmadmindetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-confirmadmindetails.component.scss */
      "./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.scss")).default]
    })], AdminConfirmadmindetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminConfirmloginAdminConfirmloginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNvbmZpcm1sb2dpbi9hZG1pbi1jb25maXJtbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminConfirmloginComponent */

  /***/
  function srcAppAdminAdminConfirmloginAdminConfirmloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfirmloginComponent", function () {
      return AdminConfirmloginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminConfirmloginComponent =
    /*#__PURE__*/
    function () {
      function AdminConfirmloginComponent() {
        _classCallCheck(this, AdminConfirmloginComponent);
      }

      _createClass(AdminConfirmloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminConfirmloginComponent;
    }();

    AdminConfirmloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-confirmlogin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-confirmlogin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-confirmlogin.component.scss */
      "./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.scss")).default]
    })], AdminConfirmloginComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent() {
        _classCallCheck(this, AdminDashboardComponent);
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-dashboard.component.scss */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.scss")).default]
    })], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminElibraryAddAdminElibraryAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWVsaWJyYXJ5LWFkZC9hZG1pbi1lbGlicmFyeS1hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminElibraryAddComponent */

  /***/
  function srcAppAdminAdminElibraryAddAdminElibraryAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminElibraryAddComponent", function () {
      return AdminElibraryAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminElibraryAddComponent =
    /*#__PURE__*/
    function () {
      function AdminElibraryAddComponent() {
        _classCallCheck(this, AdminElibraryAddComponent);
      }

      _createClass(AdminElibraryAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminElibraryAddComponent;
    }();

    AdminElibraryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-elibrary-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-elibrary-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-elibrary-add.component.scss */
      "./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.scss")).default]
    })], AdminElibraryAddComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminElibraryViewAdminElibraryViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWVsaWJyYXJ5LXZpZXcvYWRtaW4tZWxpYnJhcnktdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AdminElibraryViewComponent */

  /***/
  function srcAppAdminAdminElibraryViewAdminElibraryViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminElibraryViewComponent", function () {
      return AdminElibraryViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminElibraryViewComponent =
    /*#__PURE__*/
    function () {
      function AdminElibraryViewComponent() {
        _classCallCheck(this, AdminElibraryViewComponent);
      }

      _createClass(AdminElibraryViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminElibraryViewComponent;
    }();

    AdminElibraryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-elibrary-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-elibrary-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-elibrary-view.component.scss */
      "./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.scss")).default]
    })], AdminElibraryViewComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-elibrary/admin-elibrary.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-elibrary/admin-elibrary.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminElibraryAdminElibraryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWVsaWJyYXJ5L2FkbWluLWVsaWJyYXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-elibrary/admin-elibrary.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-elibrary/admin-elibrary.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminElibraryComponent */

  /***/
  function srcAppAdminAdminElibraryAdminElibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminElibraryComponent", function () {
      return AdminElibraryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminElibraryComponent =
    /*#__PURE__*/
    function () {
      function AdminElibraryComponent() {
        _classCallCheck(this, AdminElibraryComponent);
      }

      _createClass(AdminElibraryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminElibraryComponent;
    }();

    AdminElibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-elibrary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-elibrary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-elibrary/admin-elibrary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-elibrary.component.scss */
      "./src/app/admin/admin-elibrary/admin-elibrary.component.scss")).default]
    })], AdminElibraryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExamEditexamAdminExamEditexamComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0tZWRpdGV4YW0vYWRtaW4tZXhhbS1lZGl0ZXhhbS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AdminExamEditexamComponent */

  /***/
  function srcAppAdminAdminExamEditexamAdminExamEditexamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExamEditexamComponent", function () {
      return AdminExamEditexamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminExamEditexamComponent =
    /*#__PURE__*/
    function () {
      function AdminExamEditexamComponent() {
        _classCallCheck(this, AdminExamEditexamComponent);
      }

      _createClass(AdminExamEditexamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminExamEditexamComponent;
    }();

    AdminExamEditexamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-exam-editexam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-exam-editexam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-exam-editexam.component.scss */
      "./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.scss")).default]
    })], AdminExamEditexamComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExamEditresultAdminExamEditresultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0tZWRpdHJlc3VsdC9hZG1pbi1leGFtLWVkaXRyZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminExamEditresultComponent */

  /***/
  function srcAppAdminAdminExamEditresultAdminExamEditresultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExamEditresultComponent", function () {
      return AdminExamEditresultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminExamEditresultComponent =
    /*#__PURE__*/
    function () {
      function AdminExamEditresultComponent() {
        _classCallCheck(this, AdminExamEditresultComponent);
      }

      _createClass(AdminExamEditresultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminExamEditresultComponent;
    }();

    AdminExamEditresultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-exam-editresult',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-exam-editresult.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-exam-editresult.component.scss */
      "./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.scss")).default]
    })], AdminExamEditresultComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-manage/admin-exam-manage.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-exam-manage/admin-exam-manage.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExamManageAdminExamManageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0tbWFuYWdlL2FkbWluLWV4YW0tbWFuYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-manage/admin-exam-manage.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-exam-manage/admin-exam-manage.component.ts ***!
    \************************************************************************/

  /*! exports provided: AdminExamManageComponent */

  /***/
  function srcAppAdminAdminExamManageAdminExamManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExamManageComponent", function () {
      return AdminExamManageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminExamManageComponent =
    /*#__PURE__*/
    function () {
      function AdminExamManageComponent() {
        _classCallCheck(this, AdminExamManageComponent);
      }

      _createClass(AdminExamManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminExamManageComponent;
    }();

    AdminExamManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-exam-manage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-exam-manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-manage/admin-exam-manage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-exam-manage.component.scss */
      "./src/app/admin/admin-exam-manage/admin-exam-manage.component.scss")).default]
    })], AdminExamManageComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-new/admin-exam-new.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-exam-new/admin-exam-new.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExamNewAdminExamNewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0tbmV3L2FkbWluLWV4YW0tbmV3LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-new/admin-exam-new.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-exam-new/admin-exam-new.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminExamNewComponent */

  /***/
  function srcAppAdminAdminExamNewAdminExamNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExamNewComponent", function () {
      return AdminExamNewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminExamNewComponent =
    /*#__PURE__*/
    function () {
      function AdminExamNewComponent() {
        _classCallCheck(this, AdminExamNewComponent);
      }

      _createClass(AdminExamNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminExamNewComponent;
    }();

    AdminExamNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-exam-new',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-exam-new.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-new/admin-exam-new.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-exam-new.component.scss */
      "./src/app/admin/admin-exam-new/admin-exam-new.component.scss")).default]
    })], AdminExamNewComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-report/admin-exam-report.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-exam-report/admin-exam-report.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExamReportAdminExamReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0tcmVwb3J0L2FkbWluLWV4YW0tcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-exam-report/admin-exam-report.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-exam-report/admin-exam-report.component.ts ***!
    \************************************************************************/

  /*! exports provided: AdminExamReportComponent */

  /***/
  function srcAppAdminAdminExamReportAdminExamReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExamReportComponent", function () {
      return AdminExamReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminExamReportComponent =
    /*#__PURE__*/
    function () {
      function AdminExamReportComponent() {
        _classCallCheck(this, AdminExamReportComponent);
      }

      _createClass(AdminExamReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminExamReportComponent;
    }();

    AdminExamReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-exam-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-exam-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam-report/admin-exam-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-exam-report.component.scss */
      "./src/app/admin/admin-exam-report/admin-exam-report.component.scss")).default]
    })], AdminExamReportComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-exam/admin-exam.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-exam/admin-exam.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminExamAdminExamComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWV4YW0vYWRtaW4tZXhhbS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-exam/admin-exam.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/admin-exam/admin-exam.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdminExamComponent */

  /***/
  function srcAppAdminAdminExamAdminExamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminExamComponent", function () {
      return AdminExamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminExamComponent =
    /*#__PURE__*/
    function () {
      function AdminExamComponent() {
        _classCallCheck(this, AdminExamComponent);
      }

      _createClass(AdminExamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminExamComponent;
    }();

    AdminExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-exam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-exam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-exam/admin-exam.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-exam.component.scss */
      "./src/app/admin/admin-exam/admin-exam.component.scss")).default]
    })], AdminExamComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminFeesmanagementAnalysisAdminFeesmanagementAnalysisComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZlZXNtYW5hZ2VtZW50LWFuYWx5c2lzL2FkbWluLWZlZXNtYW5hZ2VtZW50LWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AdminFeesmanagementAnalysisComponent */

  /***/
  function srcAppAdminAdminFeesmanagementAnalysisAdminFeesmanagementAnalysisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFeesmanagementAnalysisComponent", function () {
      return AdminFeesmanagementAnalysisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminFeesmanagementAnalysisComponent =
    /*#__PURE__*/
    function () {
      function AdminFeesmanagementAnalysisComponent() {
        _classCallCheck(this, AdminFeesmanagementAnalysisComponent);
      }

      _createClass(AdminFeesmanagementAnalysisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminFeesmanagementAnalysisComponent;
    }();

    AdminFeesmanagementAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-feesmanagement-analysis',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-feesmanagement-analysis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-feesmanagement-analysis.component.scss */
      "./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.scss")).default]
    })], AdminFeesmanagementAnalysisComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminFeesmanagementDetailsAdminFeesmanagementDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZlZXNtYW5hZ2VtZW50LWRldGFpbHMvYWRtaW4tZmVlc21hbmFnZW1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AdminFeesmanagementDetailsComponent */

  /***/
  function srcAppAdminAdminFeesmanagementDetailsAdminFeesmanagementDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFeesmanagementDetailsComponent", function () {
      return AdminFeesmanagementDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminFeesmanagementDetailsComponent =
    /*#__PURE__*/
    function () {
      function AdminFeesmanagementDetailsComponent() {
        _classCallCheck(this, AdminFeesmanagementDetailsComponent);
      }

      _createClass(AdminFeesmanagementDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminFeesmanagementDetailsComponent;
    }();

    AdminFeesmanagementDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-feesmanagement-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-feesmanagement-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-feesmanagement-details.component.scss */
      "./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.scss")).default]
    })], AdminFeesmanagementDetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminFeesmanagementListAdminFeesmanagementListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZlZXNtYW5hZ2VtZW50LWxpc3QvYWRtaW4tZmVlc21hbmFnZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AdminFeesmanagementListComponent */

  /***/
  function srcAppAdminAdminFeesmanagementListAdminFeesmanagementListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFeesmanagementListComponent", function () {
      return AdminFeesmanagementListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminFeesmanagementListComponent =
    /*#__PURE__*/
    function () {
      function AdminFeesmanagementListComponent() {
        _classCallCheck(this, AdminFeesmanagementListComponent);
      }

      _createClass(AdminFeesmanagementListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminFeesmanagementListComponent;
    }();

    AdminFeesmanagementListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-feesmanagement-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-feesmanagement-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-feesmanagement-list.component.scss */
      "./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.scss")).default]
    })], AdminFeesmanagementListComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminFeesmanagementAdminFeesmanagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWZlZXNtYW5hZ2VtZW50L2FkbWluLWZlZXNtYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdminFeesmanagementComponent */

  /***/
  function srcAppAdminAdminFeesmanagementAdminFeesmanagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFeesmanagementComponent", function () {
      return AdminFeesmanagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminFeesmanagementComponent =
    /*#__PURE__*/
    function () {
      function AdminFeesmanagementComponent() {
        _classCallCheck(this, AdminFeesmanagementComponent);
      }

      _createClass(AdminFeesmanagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminFeesmanagementComponent;
    }();

    AdminFeesmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-feesmanagement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-feesmanagement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-feesmanagement.component.scss */
      "./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.scss")).default]
    })], AdminFeesmanagementComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-gallery-create/admin-gallery-create.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-gallery-create/admin-gallery-create.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminGalleryCreateAdminGalleryCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWdhbGxlcnktY3JlYXRlL2FkbWluLWdhbGxlcnktY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-gallery-create/admin-gallery-create.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-gallery-create/admin-gallery-create.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdminGalleryCreateComponent */

  /***/
  function srcAppAdminAdminGalleryCreateAdminGalleryCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGalleryCreateComponent", function () {
      return AdminGalleryCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminGalleryCreateComponent =
    /*#__PURE__*/
    function () {
      function AdminGalleryCreateComponent() {
        _classCallCheck(this, AdminGalleryCreateComponent);
      }

      _createClass(AdminGalleryCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminGalleryCreateComponent;
    }();

    AdminGalleryCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-gallery-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-gallery-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery-create/admin-gallery-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-gallery-create.component.scss */
      "./src/app/admin/admin-gallery-create/admin-gallery-create.component.scss")).default]
    })], AdminGalleryCreateComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-gallery-view/admin-gallery-view.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-gallery-view/admin-gallery-view.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminGalleryViewAdminGalleryViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWdhbGxlcnktdmlldy9hZG1pbi1nYWxsZXJ5LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-gallery-view/admin-gallery-view.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-gallery-view/admin-gallery-view.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminGalleryViewComponent */

  /***/
  function srcAppAdminAdminGalleryViewAdminGalleryViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGalleryViewComponent", function () {
      return AdminGalleryViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminGalleryViewComponent =
    /*#__PURE__*/
    function () {
      function AdminGalleryViewComponent() {
        _classCallCheck(this, AdminGalleryViewComponent);
      }

      _createClass(AdminGalleryViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminGalleryViewComponent;
    }();

    AdminGalleryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-gallery-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-gallery-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery-view/admin-gallery-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-gallery-view.component.scss */
      "./src/app/admin/admin-gallery-view/admin-gallery-view.component.scss")).default]
    })], AdminGalleryViewComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-gallery/admin-gallery.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-gallery/admin-gallery.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminGalleryAdminGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWdhbGxlcnkvYWRtaW4tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-gallery/admin-gallery.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/admin-gallery/admin-gallery.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminGalleryComponent */

  /***/
  function srcAppAdminAdminGalleryAdminGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGalleryComponent", function () {
      return AdminGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminGalleryComponent =
    /*#__PURE__*/
    function () {
      function AdminGalleryComponent() {
        _classCallCheck(this, AdminGalleryComponent);
      }

      _createClass(AdminGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminGalleryComponent;
    }();

    AdminGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-gallery/admin-gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-gallery.component.scss */
      "./src/app/admin/admin-gallery/admin-gallery.component.scss")).default]
    })], AdminGalleryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-inquiry/admin-inquiry.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-inquiry/admin-inquiry.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminInquiryAdminInquiryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWlucXVpcnkvYWRtaW4taW5xdWlyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-inquiry/admin-inquiry.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/admin-inquiry/admin-inquiry.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminInquiryComponent */

  /***/
  function srcAppAdminAdminInquiryAdminInquiryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminInquiryComponent", function () {
      return AdminInquiryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminInquiryComponent =
    /*#__PURE__*/
    function () {
      function AdminInquiryComponent() {
        _classCallCheck(this, AdminInquiryComponent);
      }

      _createClass(AdminInquiryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminInquiryComponent;
    }();

    AdminInquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-inquiry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-inquiry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-inquiry/admin-inquiry.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-inquiry.component.scss */
      "./src/app/admin/admin-inquiry/admin-inquiry.component.scss")).default]
    })], AdminInquiryComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminTimetableForstudentAdminTimetableForstudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRpbWV0YWJsZS1mb3JzdHVkZW50L2FkbWluLXRpbWV0YWJsZS1mb3JzdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: AdminTimetableForstudentComponent */

  /***/
  function srcAppAdminAdminTimetableForstudentAdminTimetableForstudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTimetableForstudentComponent", function () {
      return AdminTimetableForstudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminTimetableForstudentComponent =
    /*#__PURE__*/
    function () {
      function AdminTimetableForstudentComponent() {
        _classCallCheck(this, AdminTimetableForstudentComponent);
      }

      _createClass(AdminTimetableForstudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminTimetableForstudentComponent;
    }();

    AdminTimetableForstudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-timetable-forstudent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-timetable-forstudent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-timetable-forstudent.component.scss */
      "./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.scss")).default]
    })], AdminTimetableForstudentComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminTimetableForteacherAdminTimetableForteacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRpbWV0YWJsZS1mb3J0ZWFjaGVyL2FkbWluLXRpbWV0YWJsZS1mb3J0ZWFjaGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: AdminTimetableForteacherComponent */

  /***/
  function srcAppAdminAdminTimetableForteacherAdminTimetableForteacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTimetableForteacherComponent", function () {
      return AdminTimetableForteacherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminTimetableForteacherComponent =
    /*#__PURE__*/
    function () {
      function AdminTimetableForteacherComponent() {
        _classCallCheck(this, AdminTimetableForteacherComponent);
      }

      _createClass(AdminTimetableForteacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminTimetableForteacherComponent;
    }();

    AdminTimetableForteacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-timetable-forteacher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-timetable-forteacher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-timetable-forteacher.component.scss */
      "./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.scss")).default]
    })], AdminTimetableForteacherComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminTimetableSetupAdminTimetableSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRpbWV0YWJsZS1zZXR1cC9hZG1pbi10aW1ldGFibGUtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminTimetableSetupComponent */

  /***/
  function srcAppAdminAdminTimetableSetupAdminTimetableSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTimetableSetupComponent", function () {
      return AdminTimetableSetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminTimetableSetupComponent =
    /*#__PURE__*/
    function () {
      function AdminTimetableSetupComponent() {
        _classCallCheck(this, AdminTimetableSetupComponent);
      }

      _createClass(AdminTimetableSetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminTimetableSetupComponent;
    }();

    AdminTimetableSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-timetable-setup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-timetable-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-timetable-setup.component.scss */
      "./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.scss")).default]
    })], AdminTimetableSetupComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable/admin-timetable.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-timetable/admin-timetable.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminTimetableAdminTimetableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRpbWV0YWJsZS9hZG1pbi10aW1ldGFibGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-timetable/admin-timetable.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-timetable/admin-timetable.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminTimetableComponent */

  /***/
  function srcAppAdminAdminTimetableAdminTimetableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTimetableComponent", function () {
      return AdminTimetableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminTimetableComponent =
    /*#__PURE__*/
    function () {
      function AdminTimetableComponent() {
        _classCallCheck(this, AdminTimetableComponent);
      }

      _createClass(AdminTimetableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminTimetableComponent;
    }();

    AdminTimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-timetable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-timetable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-timetable/admin-timetable.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-timetable.component.scss */
      "./src/app/admin/admin-timetable/admin-timetable.component.scss")).default]
    })], AdminTimetableComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementAccountantAdminUsermanagementAccountantComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LWFjY291bnRhbnQvYWRtaW4tdXNlcm1hbmFnZW1lbnQtYWNjb3VudGFudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: AdminUsermanagementAccountantComponent */

  /***/
  function srcAppAdminAdminUsermanagementAccountantAdminUsermanagementAccountantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementAccountantComponent", function () {
      return AdminUsermanagementAccountantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementAccountantComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementAccountantComponent() {
        _classCallCheck(this, AdminUsermanagementAccountantComponent);
      }

      _createClass(AdminUsermanagementAccountantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementAccountantComponent;
    }();

    AdminUsermanagementAccountantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-accountant',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-accountant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-accountant.component.scss */
      "./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.scss")).default]
    })], AdminUsermanagementAccountantComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementAllusersAdminUsermanagementAllusersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LWFsbHVzZXJzL2FkbWluLXVzZXJtYW5hZ2VtZW50LWFsbHVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AdminUsermanagementAllusersComponent */

  /***/
  function srcAppAdminAdminUsermanagementAllusersAdminUsermanagementAllusersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementAllusersComponent", function () {
      return AdminUsermanagementAllusersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementAllusersComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementAllusersComponent() {
        _classCallCheck(this, AdminUsermanagementAllusersComponent);
      }

      _createClass(AdminUsermanagementAllusersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementAllusersComponent;
    }();

    AdminUsermanagementAllusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-allusers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-allusers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-allusers.component.scss */
      "./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.scss")).default]
    })], AdminUsermanagementAllusersComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementBusdriverAdminUsermanagementBusdriverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LWJ1c2RyaXZlci9hZG1pbi11c2VybWFuYWdlbWVudC1idXNkcml2ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AdminUsermanagementBusdriverComponent */

  /***/
  function srcAppAdminAdminUsermanagementBusdriverAdminUsermanagementBusdriverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementBusdriverComponent", function () {
      return AdminUsermanagementBusdriverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementBusdriverComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementBusdriverComponent() {
        _classCallCheck(this, AdminUsermanagementBusdriverComponent);
      }

      _createClass(AdminUsermanagementBusdriverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementBusdriverComponent;
    }();

    AdminUsermanagementBusdriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-busdriver',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-busdriver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-busdriver.component.scss */
      "./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.scss")).default]
    })], AdminUsermanagementBusdriverComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementClassteacherAdminUsermanagementClassteacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LWNsYXNzdGVhY2hlci9hZG1pbi11c2VybWFuYWdlbWVudC1jbGFzc3RlYWNoZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdminUsermanagementClassteacherComponent */

  /***/
  function srcAppAdminAdminUsermanagementClassteacherAdminUsermanagementClassteacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementClassteacherComponent", function () {
      return AdminUsermanagementClassteacherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementClassteacherComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementClassteacherComponent() {
        _classCallCheck(this, AdminUsermanagementClassteacherComponent);
      }

      _createClass(AdminUsermanagementClassteacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementClassteacherComponent;
    }();

    AdminUsermanagementClassteacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-classteacher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-classteacher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-classteacher.component.scss */
      "./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.scss")).default]
    })], AdminUsermanagementClassteacherComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementHodAdminUsermanagementHodComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LWhvZC9hZG1pbi11c2VybWFuYWdlbWVudC1ob2QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AdminUsermanagementHodComponent */

  /***/
  function srcAppAdminAdminUsermanagementHodAdminUsermanagementHodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementHodComponent", function () {
      return AdminUsermanagementHodComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementHodComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementHodComponent() {
        _classCallCheck(this, AdminUsermanagementHodComponent);
      }

      _createClass(AdminUsermanagementHodComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementHodComponent;
    }();

    AdminUsermanagementHodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-hod',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-hod.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-hod.component.scss */
      "./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.scss")).default]
    })], AdminUsermanagementHodComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementLibrarianAdminUsermanagementLibrarianComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LWxpYnJhcmlhbi9hZG1pbi11c2VybWFuYWdlbWVudC1saWJyYXJpYW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AdminUsermanagementLibrarianComponent */

  /***/
  function srcAppAdminAdminUsermanagementLibrarianAdminUsermanagementLibrarianComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementLibrarianComponent", function () {
      return AdminUsermanagementLibrarianComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementLibrarianComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementLibrarianComponent() {
        _classCallCheck(this, AdminUsermanagementLibrarianComponent);
      }

      _createClass(AdminUsermanagementLibrarianComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementLibrarianComponent;
    }();

    AdminUsermanagementLibrarianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-librarian',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-librarian.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-librarian.component.scss */
      "./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.scss")).default]
    })], AdminUsermanagementLibrarianComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementPrincipalAdminUsermanagementPrincipalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LXByaW5jaXBhbC9hZG1pbi11c2VybWFuYWdlbWVudC1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AdminUsermanagementPrincipalComponent */

  /***/
  function srcAppAdminAdminUsermanagementPrincipalAdminUsermanagementPrincipalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementPrincipalComponent", function () {
      return AdminUsermanagementPrincipalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementPrincipalComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementPrincipalComponent() {
        _classCallCheck(this, AdminUsermanagementPrincipalComponent);
      }

      _createClass(AdminUsermanagementPrincipalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementPrincipalComponent;
    }();

    AdminUsermanagementPrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-principal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-principal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-principal.component.scss */
      "./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.scss")).default]
    })], AdminUsermanagementPrincipalComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementStudentAdminUsermanagementStudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LXN0dWRlbnQvYWRtaW4tdXNlcm1hbmFnZW1lbnQtc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AdminUsermanagementStudentComponent */

  /***/
  function srcAppAdminAdminUsermanagementStudentAdminUsermanagementStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementStudentComponent", function () {
      return AdminUsermanagementStudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementStudentComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementStudentComponent() {
        _classCallCheck(this, AdminUsermanagementStudentComponent);
      }

      _createClass(AdminUsermanagementStudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementStudentComponent;
    }();

    AdminUsermanagementStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-student.component.scss */
      "./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.scss")).default]
    })], AdminUsermanagementStudentComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementStudentstep2AdminUsermanagementStudentstep2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LXN0dWRlbnRzdGVwMi9hZG1pbi11c2VybWFuYWdlbWVudC1zdHVkZW50c3RlcDIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AdminUsermanagementStudentstep2Component */

  /***/
  function srcAppAdminAdminUsermanagementStudentstep2AdminUsermanagementStudentstep2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementStudentstep2Component", function () {
      return AdminUsermanagementStudentstep2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementStudentstep2Component =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementStudentstep2Component() {
        _classCallCheck(this, AdminUsermanagementStudentstep2Component);
      }

      _createClass(AdminUsermanagementStudentstep2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementStudentstep2Component;
    }();

    AdminUsermanagementStudentstep2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-studentstep2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-studentstep2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-studentstep2.component.scss */
      "./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.scss")).default]
    })], AdminUsermanagementStudentstep2Component);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementTeacherAdminUsermanagementTeacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50LXRlYWNoZXIvYWRtaW4tdXNlcm1hbmFnZW1lbnQtdGVhY2hlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AdminUsermanagementTeacherComponent */

  /***/
  function srcAppAdminAdminUsermanagementTeacherAdminUsermanagementTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementTeacherComponent", function () {
      return AdminUsermanagementTeacherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementTeacherComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementTeacherComponent() {
        _classCallCheck(this, AdminUsermanagementTeacherComponent);
      }

      _createClass(AdminUsermanagementTeacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementTeacherComponent;
    }();

    AdminUsermanagementTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement-teacher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement-teacher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement-teacher.component.scss */
      "./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.scss")).default]
    })], AdminUsermanagementTeacherComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement/admin-usermanagement.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement/admin-usermanagement.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminUsermanagementAdminUsermanagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJtYW5hZ2VtZW50L2FkbWluLXVzZXJtYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-usermanagement/admin-usermanagement.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-usermanagement/admin-usermanagement.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdminUsermanagementComponent */

  /***/
  function srcAppAdminAdminUsermanagementAdminUsermanagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsermanagementComponent", function () {
      return AdminUsermanagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminUsermanagementComponent =
    /*#__PURE__*/
    function () {
      function AdminUsermanagementComponent() {
        _classCallCheck(this, AdminUsermanagementComponent);
      }

      _createClass(AdminUsermanagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsermanagementComponent;
    }();

    AdminUsermanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-usermanagement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-usermanagement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-usermanagement/admin-usermanagement.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-usermanagement.component.scss */
      "./src/app/admin/admin-usermanagement/admin-usermanagement.component.scss")).default]
    })], AdminUsermanagementComponent);
    /***/
  },

  /***/
  "./src/app/admin/common/admin-footer/admin-footer.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/common/admin-footer/admin-footer.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCommonAdminFooterAdminFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbW1vbi9hZG1pbi1mb290ZXIvYWRtaW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/common/admin-footer/admin-footer.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/common/admin-footer/admin-footer.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminFooterComponent */

  /***/
  function srcAppAdminCommonAdminFooterAdminFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function () {
      return AdminFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminFooterComponent =
    /*#__PURE__*/
    function () {
      function AdminFooterComponent() {
        _classCallCheck(this, AdminFooterComponent);
      }

      _createClass(AdminFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminFooterComponent;
    }();

    AdminFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-footer/admin-footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-footer.component.scss */
      "./src/app/admin/common/admin-footer/admin-footer.component.scss")).default]
    })], AdminFooterComponent);
    /***/
  },

  /***/
  "./src/app/admin/common/admin-header/admin-header.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/common/admin-header/admin-header.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCommonAdminHeaderAdminHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-admin-header {\n  padding: 100px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tbW9uL2FkbWluLWhlYWRlci9DOlxcUGFua2FqXFxEYXRhXFxlZHV0ZWNoXFxzY2hvb2wtbWFuYWdlbWVudC9zcmNcXGFwcFxcYWRtaW5cXGNvbW1vblxcYWRtaW4taGVhZGVyXFxhZG1pbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbW1vbi9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbW1vbi9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFkbWluLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xyXG59IiwiYXBwLWFkbWluLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/common/admin-header/admin-header.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/common/admin-header/admin-header.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminHeaderComponent */

  /***/
  function srcAppAdminCommonAdminHeaderAdminHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function () {
      return AdminHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminHeaderComponent =
    /*#__PURE__*/
    function () {
      function AdminHeaderComponent() {
        _classCallCheck(this, AdminHeaderComponent);
      }

      _createClass(AdminHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminHeaderComponent;
    }();

    AdminHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-header/admin-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-header.component.scss */
      "./src/app/admin/common/admin-header/admin-header.component.scss")).default]
    })], AdminHeaderComponent);
    /***/
  },

  /***/
  "./src/app/admin/common/admin-sidebar/admin-sidebar.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/common/admin-sidebar/admin-sidebar.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCommonAdminSidebarAdminSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbW1vbi9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/common/admin-sidebar/admin-sidebar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin/common/admin-sidebar/admin-sidebar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminSidebarComponent */

  /***/
  function srcAppAdminCommonAdminSidebarAdminSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function () {
      return AdminSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminSidebarComponent =
    /*#__PURE__*/
    function () {
      function AdminSidebarComponent() {
        _classCallCheck(this, AdminSidebarComponent);
      }

      _createClass(AdminSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminSidebarComponent;
    }();

    AdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/common/admin-sidebar/admin-sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-sidebar.component.scss */
      "./src/app/admin/common/admin-sidebar/admin-sidebar.component.scss")).default]
    })], AdminSidebarComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _public_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./public/home/home.component */
    "./src/app/public/home/home.component.ts");
    /* harmony import */


    var _public_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./public/our-mission/our-mission.component */
    "./src/app/public/our-mission/our-mission.component.ts");
    /* harmony import */


    var _public_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./public/our-vision/our-vision.component */
    "./src/app/public/our-vision/our-vision.component.ts");
    /* harmony import */


    var _public_student_goals_student_goals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./public/student-goals/student-goals.component */
    "./src/app/public/student-goals/student-goals.component.ts");
    /* harmony import */


    var _public_chairmans_desk_chairmans_desk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./public/chairmans-desk/chairmans-desk.component */
    "./src/app/public/chairmans-desk/chairmans-desk.component.ts");
    /* harmony import */


    var _public_principals_desk_principals_desk_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./public/principals-desk/principals-desk.component */
    "./src/app/public/principals-desk/principals-desk.component.ts");
    /* harmony import */


    var _public_classes_classes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./public/classes/classes.component */
    "./src/app/public/classes/classes.component.ts");
    /* harmony import */


    var _public_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./public/why-us/why-us.component */
    "./src/app/public/why-us/why-us.component.ts");
    /* harmony import */


    var _public_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./public/academic-session/academic-session.component */
    "./src/app/public/academic-session/academic-session.component.ts");
    /* harmony import */


    var _public_admission_procedure_admission_procedure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./public/admission-procedure/admission-procedure.component */
    "./src/app/public/admission-procedure/admission-procedure.component.ts");
    /* harmony import */


    var _public_between_us_portal_between_us_portal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./public/between-us-portal/between-us-portal.component */
    "./src/app/public/between-us-portal/between-us-portal.component.ts");
    /* harmony import */


    var _public_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./public/teachers/teachers.component */
    "./src/app/public/teachers/teachers.component.ts");
    /* harmony import */


    var _public_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./public/gallery/gallery.component */
    "./src/app/public/gallery/gallery.component.ts");
    /* harmony import */


    var _public_career_career_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./public/career/career.component */
    "./src/app/public/career/career.component.ts");
    /* harmony import */


    var _public_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./public/contactus/contactus.component */
    "./src/app/public/contactus/contactus.component.ts");
    /* harmony import */


    var _public_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./public/header/header.component */
    "./src/app/public/header/header.component.ts");
    /* harmony import */


    var _public_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./public/footer/footer.component */
    "./src/app/public/footer/footer.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _super_admin_common_super_header_super_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./super-admin/common/super-header/super-header.component */
    "./src/app/super-admin/common/super-header/super-header.component.ts");
    /* harmony import */


    var _super_admin_super_dashboard_super_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./super-admin/super-dashboard/super-dashboard.component */
    "./src/app/super-admin/super-dashboard/super-dashboard.component.ts");
    /* harmony import */


    var _super_admin_common_super_footer_super_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./super-admin/common/super-footer/super-footer.component */
    "./src/app/super-admin/common/super-footer/super-footer.component.ts");
    /* harmony import */


    var _super_admin_common_super_sidebar_super_sidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./super-admin/common/super-sidebar/super-sidebar.component */
    "./src/app/super-admin/common/super-sidebar/super-sidebar.component.ts");
    /* harmony import */


    var _super_admin_super_school_super_school_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./super-admin/super-school/super-school.component */
    "./src/app/super-admin/super-school/super-school.component.ts");
    /* harmony import */


    var _super_admin_super_school_add_super_school_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./super-admin/super-school-add/super-school-add.component */
    "./src/app/super-admin/super-school-add/super-school-add.component.ts");
    /* harmony import */


    var _super_admin_super_school_edit_super_school_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./super-admin/super-school-edit/super-school-edit.component */
    "./src/app/super-admin/super-school-edit/super-school-edit.component.ts");
    /* harmony import */


    var _super_admin_super_school_list_super_school_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./super-admin/super-school-list/super-school-list.component */
    "./src/app/super-admin/super-school-list/super-school-list.component.ts");
    /* harmony import */


    var _admin_admin_confirmlogin_admin_confirmlogin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/admin-confirmlogin/admin-confirmlogin.component */
    "./src/app/admin/admin-confirmlogin/admin-confirmlogin.component.ts");
    /* harmony import */


    var _admin_admin_confirmadmindetails_admin_confirmadmindetails_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./admin/admin-confirmadmindetails/admin-confirmadmindetails.component */
    "./src/app/admin/admin-confirmadmindetails/admin-confirmadmindetails.component.ts");
    /* harmony import */


    var _admin_common_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/common/admin-header/admin-header.component */
    "./src/app/admin/common/admin-header/admin-header.component.ts");
    /* harmony import */


    var _admin_common_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin/common/admin-footer/admin-footer.component */
    "./src/app/admin/common/admin-footer/admin-footer.component.ts");
    /* harmony import */


    var _admin_common_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/common/admin-sidebar/admin-sidebar.component */
    "./src/app/admin/common/admin-sidebar/admin-sidebar.component.ts");
    /* harmony import */


    var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_admin_configuration_admin_configuration_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./admin/admin-configuration/admin-configuration.component */
    "./src/app/admin/admin-configuration/admin-configuration.component.ts");
    /* harmony import */


    var _admin_admin_configuration_aboutschool_admin_configuration_aboutschool_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component */
    "./src/app/admin/admin-configuration-aboutschool/admin-configuration-aboutschool.component.ts");
    /* harmony import */


    var _admin_admin_configuration_institutecommittee_admin_configuration_institutecommittee_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component */
    "./src/app/admin/admin-configuration-institutecommittee/admin-configuration-institutecommittee.component.ts");
    /* harmony import */


    var _admin_admin_configuration_institutedepartment_admin_configuration_institutedepartment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component */
    "./src/app/admin/admin-configuration-institutedepartment/admin-configuration-institutedepartment.component.ts");
    /* harmony import */


    var _admin_admin_configuration_instituteclass_admin_configuration_instituteclass_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component */
    "./src/app/admin/admin-configuration-instituteclass/admin-configuration-instituteclass.component.ts");
    /* harmony import */


    var _admin_admin_configuration_institutedivision_admin_configuration_institutedivision_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component */
    "./src/app/admin/admin-configuration-institutedivision/admin-configuration-institutedivision.component.ts");
    /* harmony import */


    var _admin_admin_configuration_subjectmanagement_admin_configuration_subjectmanagement_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component */
    "./src/app/admin/admin-configuration-subjectmanagement/admin-configuration-subjectmanagement.component.ts");
    /* harmony import */


    var _admin_admin_configuration_assignsubject_admin_configuration_assignsubject_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component */
    "./src/app/admin/admin-configuration-assignsubject/admin-configuration-assignsubject.component.ts");
    /* harmony import */


    var _admin_admin_configuration_assignteacher_admin_configuration_assignteacher_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component */
    "./src/app/admin/admin-configuration-assignteacher/admin-configuration-assignteacher.component.ts");
    /* harmony import */


    var _admin_admin_configuration_fees_admin_configuration_fees_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./admin/admin-configuration-fees/admin-configuration-fees.component */
    "./src/app/admin/admin-configuration-fees/admin-configuration-fees.component.ts");
    /* harmony import */


    var _admin_admin_configuration_homeslider_admin_configuration_homeslider_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./admin/admin-configuration-homeslider/admin-configuration-homeslider.component */
    "./src/app/admin/admin-configuration-homeslider/admin-configuration-homeslider.component.ts");
    /* harmony import */


    var _admin_admin_configuration_secondaryadmin_admin_configuration_secondaryadmin_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component */
    "./src/app/admin/admin-configuration-secondaryadmin/admin-configuration-secondaryadmin.component.ts");
    /* harmony import */


    var _admin_admin_configuration_attendanceediting_admin_configuration_attendanceediting_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component */
    "./src/app/admin/admin-configuration-attendanceediting/admin-configuration-attendanceediting.component.ts");
    /* harmony import */


    var _admin_admin_configuration_applicationlabel_admin_configuration_applicationlabel_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component */
    "./src/app/admin/admin-configuration-applicationlabel/admin-configuration-applicationlabel.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_admin_usermanagement_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./admin/admin-usermanagement/admin-usermanagement.component */
    "./src/app/admin/admin-usermanagement/admin-usermanagement.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_principal_admin_usermanagement_principal_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-principal/admin-usermanagement-principal.component */
    "./src/app/admin/admin-usermanagement-principal/admin-usermanagement-principal.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_hod_admin_usermanagement_hod_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-hod/admin-usermanagement-hod.component */
    "./src/app/admin/admin-usermanagement-hod/admin-usermanagement-hod.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_classteacher_admin_usermanagement_classteacher_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component */
    "./src/app/admin/admin-usermanagement-classteacher/admin-usermanagement-classteacher.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_teacher_admin_usermanagement_teacher_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component */
    "./src/app/admin/admin-usermanagement-teacher/admin-usermanagement-teacher.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_librarian_admin_usermanagement_librarian_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component */
    "./src/app/admin/admin-usermanagement-librarian/admin-usermanagement-librarian.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_accountant_admin_usermanagement_accountant_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component */
    "./src/app/admin/admin-usermanagement-accountant/admin-usermanagement-accountant.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_busdriver_admin_usermanagement_busdriver_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component */
    "./src/app/admin/admin-usermanagement-busdriver/admin-usermanagement-busdriver.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_allusers_admin_usermanagement_allusers_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component */
    "./src/app/admin/admin-usermanagement-allusers/admin-usermanagement-allusers.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_student_admin_usermanagement_student_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-student/admin-usermanagement-student.component */
    "./src/app/admin/admin-usermanagement-student/admin-usermanagement-student.component.ts");
    /* harmony import */


    var _admin_admin_usermanagement_studentstep2_admin_usermanagement_studentstep2_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component */
    "./src/app/admin/admin-usermanagement-studentstep2/admin-usermanagement-studentstep2.component.ts");
    /* harmony import */


    var _admin_admin_feesmanagement_admin_feesmanagement_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./admin/admin-feesmanagement/admin-feesmanagement.component */
    "./src/app/admin/admin-feesmanagement/admin-feesmanagement.component.ts");
    /* harmony import */


    var _admin_admin_feesmanagement_details_admin_feesmanagement_details_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./admin/admin-feesmanagement-details/admin-feesmanagement-details.component */
    "./src/app/admin/admin-feesmanagement-details/admin-feesmanagement-details.component.ts");
    /* harmony import */


    var _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./admin/admin-attendance/admin-attendance.component */
    "./src/app/admin/admin-attendance/admin-attendance.component.ts");
    /* harmony import */


    var _admin_admin_attendance_newattendance_admin_attendance_newattendance_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./admin/admin-attendance-newattendance/admin-attendance-newattendance.component */
    "./src/app/admin/admin-attendance-newattendance/admin-attendance-newattendance.component.ts");
    /* harmony import */


    var _admin_admin_attendance_attendanceanalysis_admin_attendance_attendanceanalysis_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component */
    "./src/app/admin/admin-attendance-attendanceanalysis/admin-attendance-attendanceanalysis.component.ts");
    /* harmony import */


    var _admin_admin_attendance_leaveapplication_admin_attendance_leaveapplication_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component */
    "./src/app/admin/admin-attendance-leaveapplication/admin-attendance-leaveapplication.component.ts");
    /* harmony import */


    var _admin_admin_feesmanagement_list_admin_feesmanagement_list_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./admin/admin-feesmanagement-list/admin-feesmanagement-list.component */
    "./src/app/admin/admin-feesmanagement-list/admin-feesmanagement-list.component.ts");
    /* harmony import */


    var _admin_admin_feesmanagement_analysis_admin_feesmanagement_analysis_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component */
    "./src/app/admin/admin-feesmanagement-analysis/admin-feesmanagement-analysis.component.ts");
    /* harmony import */


    var _admin_admin_timetable_admin_timetable_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./admin/admin-timetable/admin-timetable.component */
    "./src/app/admin/admin-timetable/admin-timetable.component.ts");
    /* harmony import */


    var _admin_admin_timetable_forstudent_admin_timetable_forstudent_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ./admin/admin-timetable-forstudent/admin-timetable-forstudent.component */
    "./src/app/admin/admin-timetable-forstudent/admin-timetable-forstudent.component.ts");
    /* harmony import */


    var _admin_admin_timetable_forteacher_admin_timetable_forteacher_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! ./admin/admin-timetable-forteacher/admin-timetable-forteacher.component */
    "./src/app/admin/admin-timetable-forteacher/admin-timetable-forteacher.component.ts");
    /* harmony import */


    var _admin_admin_timetable_setup_admin_timetable_setup_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! ./admin/admin-timetable-setup/admin-timetable-setup.component */
    "./src/app/admin/admin-timetable-setup/admin-timetable-setup.component.ts");
    /* harmony import */


    var _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! ./admin/admin-exam/admin-exam.component */
    "./src/app/admin/admin-exam/admin-exam.component.ts");
    /* harmony import */


    var _admin_admin_exam_new_admin_exam_new_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! ./admin/admin-exam-new/admin-exam-new.component */
    "./src/app/admin/admin-exam-new/admin-exam-new.component.ts");
    /* harmony import */


    var _admin_admin_exam_manage_admin_exam_manage_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! ./admin/admin-exam-manage/admin-exam-manage.component */
    "./src/app/admin/admin-exam-manage/admin-exam-manage.component.ts");
    /* harmony import */


    var _admin_admin_exam_editresult_admin_exam_editresult_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! ./admin/admin-exam-editresult/admin-exam-editresult.component */
    "./src/app/admin/admin-exam-editresult/admin-exam-editresult.component.ts");
    /* harmony import */


    var _admin_admin_exam_editexam_admin_exam_editexam_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! ./admin/admin-exam-editexam/admin-exam-editexam.component */
    "./src/app/admin/admin-exam-editexam/admin-exam-editexam.component.ts");
    /* harmony import */


    var _admin_admin_exam_report_admin_exam_report_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! ./admin/admin-exam-report/admin-exam-report.component */
    "./src/app/admin/admin-exam-report/admin-exam-report.component.ts");
    /* harmony import */


    var _admin_admin_academiccalendar_admin_academiccalendar_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
    /*! ./admin/admin-academiccalendar/admin-academiccalendar.component */
    "./src/app/admin/admin-academiccalendar/admin-academiccalendar.component.ts");
    /* harmony import */


    var _admin_admin_academiccalendar_create_admin_academiccalendar_create_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
    /*! ./admin/admin-academiccalendar-create/admin-academiccalendar-create.component */
    "./src/app/admin/admin-academiccalendar-create/admin-academiccalendar-create.component.ts");
    /* harmony import */


    var _admin_admin_academiccalendar_fullcalendar_admin_academiccalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
    /*! ./admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component */
    "./src/app/admin/admin-academiccalendar-fullcalendar/admin-academiccalendar-fullcalendar.component.ts");
    /* harmony import */


    var _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
    /*! ./admin/admin-gallery/admin-gallery.component */
    "./src/app/admin/admin-gallery/admin-gallery.component.ts");
    /* harmony import */


    var _admin_admin_gallery_create_admin_gallery_create_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
    /*! ./admin/admin-gallery-create/admin-gallery-create.component */
    "./src/app/admin/admin-gallery-create/admin-gallery-create.component.ts");
    /* harmony import */


    var _admin_admin_gallery_view_admin_gallery_view_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
    /*! ./admin/admin-gallery-view/admin-gallery-view.component */
    "./src/app/admin/admin-gallery-view/admin-gallery-view.component.ts");
    /* harmony import */


    var _admin_admin_inquiry_admin_inquiry_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
    /*! ./admin/admin-inquiry/admin-inquiry.component */
    "./src/app/admin/admin-inquiry/admin-inquiry.component.ts");
    /* harmony import */


    var _admin_admin_chat_admin_chat_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
    /*! ./admin/admin-chat/admin-chat.component */
    "./src/app/admin/admin-chat/admin-chat.component.ts");
    /* harmony import */


    var _admin_admin_elibrary_admin_elibrary_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
    /*! ./admin/admin-elibrary/admin-elibrary.component */
    "./src/app/admin/admin-elibrary/admin-elibrary.component.ts");
    /* harmony import */


    var _admin_admin_elibrary_add_admin_elibrary_add_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
    /*! ./admin/admin-elibrary-add/admin-elibrary-add.component */
    "./src/app/admin/admin-elibrary-add/admin-elibrary-add.component.ts");
    /* harmony import */


    var _admin_admin_elibrary_view_admin_elibrary_view_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
    /*! ./admin/admin-elibrary-view/admin-elibrary-view.component */
    "./src/app/admin/admin-elibrary-view/admin-elibrary-view.component.ts"); // Public
    // Login
    // Super Admin
    // Admin


    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, // Public
    {
      path: 'home',
      component: _public_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'ourMission',
      component: _public_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_4__["OurMissionComponent"]
    }, {
      path: 'ourvision',
      component: _public_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_5__["OurVisionComponent"]
    }, {
      path: 'studentGoals',
      component: _public_student_goals_student_goals_component__WEBPACK_IMPORTED_MODULE_6__["StudentGoalsComponent"]
    }, {
      path: 'chairmansDesk',
      component: _public_chairmans_desk_chairmans_desk_component__WEBPACK_IMPORTED_MODULE_7__["ChairmansDeskComponent"]
    }, {
      path: 'principalsDesk',
      component: _public_principals_desk_principals_desk_component__WEBPACK_IMPORTED_MODULE_8__["PrincipalsDeskComponent"]
    }, {
      path: 'classes',
      component: _public_classes_classes_component__WEBPACK_IMPORTED_MODULE_9__["ClassesComponent"]
    }, {
      path: 'whyUs',
      component: _public_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_10__["WhyUsComponent"]
    }, {
      path: 'academicSession',
      component: _public_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_11__["AcademicSessionComponent"]
    }, {
      path: 'academicProcedure',
      component: _public_admission_procedure_admission_procedure_component__WEBPACK_IMPORTED_MODULE_12__["AdmissionProcedureComponent"]
    }, {
      path: 'betweenUsPortal',
      component: _public_between_us_portal_between_us_portal_component__WEBPACK_IMPORTED_MODULE_13__["BetweenUsPortalComponent"]
    }, {
      path: 'teachers',
      component: _public_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_14__["TeachersComponent"]
    }, {
      path: 'gallery',
      component: _public_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__["GalleryComponent"]
    }, {
      path: 'career',
      component: _public_career_career_component__WEBPACK_IMPORTED_MODULE_16__["CareerComponent"]
    }, {
      path: 'contactUs',
      component: _public_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__["ContactusComponent"]
    }, // Login
    {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
    }, // Super Admin
    {
      path: 'super-dashboard',
      component: _super_admin_super_dashboard_super_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["SuperDashboardComponent"]
    }, {
      path: 'super-school',
      component: _super_admin_super_school_super_school_component__WEBPACK_IMPORTED_MODULE_25__["SuperSchoolComponent"]
    }, {
      path: 'super-school-add',
      component: _super_admin_super_school_add_super_school_add_component__WEBPACK_IMPORTED_MODULE_26__["SuperSchoolAddComponent"]
    }, {
      path: 'super-school-edit',
      component: _super_admin_super_school_edit_super_school_edit_component__WEBPACK_IMPORTED_MODULE_27__["SuperSchoolEditComponent"]
    }, {
      path: 'super-school-list',
      component: _super_admin_super_school_list_super_school_list_component__WEBPACK_IMPORTED_MODULE_28__["SuperSchoolListComponent"]
    }, // Admin
    {
      path: 'admin-confirmlogin',
      component: _admin_admin_confirmlogin_admin_confirmlogin_component__WEBPACK_IMPORTED_MODULE_29__["AdminConfirmloginComponent"]
    }, {
      path: 'admin-confirmadmindetails',
      component: _admin_admin_confirmadmindetails_admin_confirmadmindetails_component__WEBPACK_IMPORTED_MODULE_30__["AdminConfirmadmindetailsComponent"]
    }, {
      path: 'admin-dashboard',
      component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["AdminDashboardComponent"]
    }, {
      path: 'admin-configuration',
      component: _admin_admin_configuration_admin_configuration_component__WEBPACK_IMPORTED_MODULE_35__["AdminConfigurationComponent"]
    }, {
      path: 'admin-configuration-aboutschool',
      component: _admin_admin_configuration_aboutschool_admin_configuration_aboutschool_component__WEBPACK_IMPORTED_MODULE_36__["AdminConfigurationAboutschoolComponent"]
    }, {
      path: 'admin-configuration-institutecommittee',
      component: _admin_admin_configuration_institutecommittee_admin_configuration_institutecommittee_component__WEBPACK_IMPORTED_MODULE_37__["AdminConfigurationInstitutecommitteeComponent"]
    }, {
      path: 'admin-configuration-institutedepartment',
      component: _admin_admin_configuration_institutedepartment_admin_configuration_institutedepartment_component__WEBPACK_IMPORTED_MODULE_38__["AdminConfigurationInstitutedepartmentComponent"]
    }, {
      path: 'admin-configuration-instituteclass',
      component: _admin_admin_configuration_instituteclass_admin_configuration_instituteclass_component__WEBPACK_IMPORTED_MODULE_39__["AdminConfigurationInstituteclassComponent"]
    }, {
      path: 'admin-configuration-institutedivision',
      component: _admin_admin_configuration_institutedivision_admin_configuration_institutedivision_component__WEBPACK_IMPORTED_MODULE_40__["AdminConfigurationInstitutedivisionComponent"]
    }, {
      path: 'admin-configuration-subjectmanagement',
      component: _admin_admin_configuration_subjectmanagement_admin_configuration_subjectmanagement_component__WEBPACK_IMPORTED_MODULE_41__["AdminConfigurationSubjectmanagementComponent"]
    }, {
      path: 'admin-configuration-assignsubject',
      component: _admin_admin_configuration_assignsubject_admin_configuration_assignsubject_component__WEBPACK_IMPORTED_MODULE_42__["AdminConfigurationAssignsubjectComponent"]
    }, {
      path: 'admin-configuration-assignteacher',
      component: _admin_admin_configuration_assignteacher_admin_configuration_assignteacher_component__WEBPACK_IMPORTED_MODULE_43__["AdminConfigurationAssignteacherComponent"]
    }, {
      path: 'admin-configuration-fees',
      component: _admin_admin_configuration_fees_admin_configuration_fees_component__WEBPACK_IMPORTED_MODULE_44__["AdminConfigurationFeesComponent"]
    }, {
      path: 'admin-configuration-homeslider',
      component: _admin_admin_configuration_homeslider_admin_configuration_homeslider_component__WEBPACK_IMPORTED_MODULE_45__["AdminConfigurationHomesliderComponent"]
    }, {
      path: 'admin-configuration-secondaryadmin',
      component: _admin_admin_configuration_secondaryadmin_admin_configuration_secondaryadmin_component__WEBPACK_IMPORTED_MODULE_46__["AdminConfigurationSecondaryadminComponent"]
    }, {
      path: 'admin-configuration-attendanceediting',
      component: _admin_admin_configuration_attendanceediting_admin_configuration_attendanceediting_component__WEBPACK_IMPORTED_MODULE_47__["AdminConfigurationAttendanceeditingComponent"]
    }, {
      path: 'admin-configuration-applicationlabel',
      component: _admin_admin_configuration_applicationlabel_admin_configuration_applicationlabel_component__WEBPACK_IMPORTED_MODULE_48__["AdminConfigurationApplicationlabelComponent"]
    }, {
      path: 'admin-usermanagement',
      component: _admin_admin_usermanagement_admin_usermanagement_component__WEBPACK_IMPORTED_MODULE_49__["AdminUsermanagementComponent"]
    }, {
      path: 'admin-usermanagement-allusers',
      component: _admin_admin_usermanagement_allusers_admin_usermanagement_allusers_component__WEBPACK_IMPORTED_MODULE_57__["AdminUsermanagementAllusersComponent"]
    }, {
      path: 'admin-usermanagement-student',
      component: _admin_admin_usermanagement_student_admin_usermanagement_student_component__WEBPACK_IMPORTED_MODULE_58__["AdminUsermanagementStudentComponent"]
    }, {
      path: 'admin-usermanagement-studentstep2',
      component: _admin_admin_usermanagement_studentstep2_admin_usermanagement_studentstep2_component__WEBPACK_IMPORTED_MODULE_59__["AdminUsermanagementStudentstep2Component"]
    }, {
      path: 'admin-usermanagement-teacher',
      component: _admin_admin_usermanagement_teacher_admin_usermanagement_teacher_component__WEBPACK_IMPORTED_MODULE_53__["AdminUsermanagementTeacherComponent"]
    }, {
      path: 'admin-usermanagement-classteacher',
      component: _admin_admin_usermanagement_classteacher_admin_usermanagement_classteacher_component__WEBPACK_IMPORTED_MODULE_52__["AdminUsermanagementClassteacherComponent"]
    }, {
      path: 'admin-usermanagement-hod',
      component: _admin_admin_usermanagement_hod_admin_usermanagement_hod_component__WEBPACK_IMPORTED_MODULE_51__["AdminUsermanagementHodComponent"]
    }, {
      path: 'admin-usermanagement-librarian',
      component: _admin_admin_usermanagement_librarian_admin_usermanagement_librarian_component__WEBPACK_IMPORTED_MODULE_54__["AdminUsermanagementLibrarianComponent"]
    }, {
      path: 'admin-usermanagement-accountant',
      component: _admin_admin_usermanagement_accountant_admin_usermanagement_accountant_component__WEBPACK_IMPORTED_MODULE_55__["AdminUsermanagementAccountantComponent"]
    }, {
      path: 'admin-usermanagement-busdriver',
      component: _admin_admin_usermanagement_busdriver_admin_usermanagement_busdriver_component__WEBPACK_IMPORTED_MODULE_56__["AdminUsermanagementBusdriverComponent"]
    }, {
      path: 'admin-usermanagement-principal',
      component: _admin_admin_usermanagement_principal_admin_usermanagement_principal_component__WEBPACK_IMPORTED_MODULE_50__["AdminUsermanagementPrincipalComponent"]
    }, {
      path: 'admin-feesmanagement',
      component: _admin_admin_feesmanagement_admin_feesmanagement_component__WEBPACK_IMPORTED_MODULE_60__["AdminFeesmanagementComponent"]
    }, {
      path: 'admin-feesmanagement-list',
      component: _admin_admin_feesmanagement_list_admin_feesmanagement_list_component__WEBPACK_IMPORTED_MODULE_66__["AdminFeesmanagementListComponent"]
    }, {
      path: 'admin-feesmanagement-details',
      component: _admin_admin_feesmanagement_details_admin_feesmanagement_details_component__WEBPACK_IMPORTED_MODULE_61__["AdminFeesmanagementDetailsComponent"]
    }, {
      path: 'admin-feesmanagement-analysis',
      component: _admin_admin_feesmanagement_analysis_admin_feesmanagement_analysis_component__WEBPACK_IMPORTED_MODULE_67__["AdminFeesmanagementAnalysisComponent"]
    }, {
      path: 'admin-attendance',
      component: _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_62__["AdminAttendanceComponent"]
    }, {
      path: 'admin-attendance-new',
      component: _admin_admin_attendance_newattendance_admin_attendance_newattendance_component__WEBPACK_IMPORTED_MODULE_63__["AdminAttendanceNewattendanceComponent"]
    }, {
      path: 'admin-attendance-leaveanalysis',
      component: _admin_admin_attendance_leaveapplication_admin_attendance_leaveapplication_component__WEBPACK_IMPORTED_MODULE_65__["AdminAttendanceLeaveapplicationComponent"]
    }, {
      path: 'admin-attendance-analysis',
      component: _admin_admin_attendance_attendanceanalysis_admin_attendance_attendanceanalysis_component__WEBPACK_IMPORTED_MODULE_64__["AdminAttendanceAttendanceanalysisComponent"]
    }, {
      path: 'admin-timetable',
      component: _admin_admin_timetable_admin_timetable_component__WEBPACK_IMPORTED_MODULE_68__["AdminTimetableComponent"]
    }, {
      path: 'admin-timetable-setup',
      component: _admin_admin_timetable_setup_admin_timetable_setup_component__WEBPACK_IMPORTED_MODULE_71__["AdminTimetableSetupComponent"]
    }, {
      path: 'admin-timetable-forstudent',
      component: _admin_admin_timetable_forstudent_admin_timetable_forstudent_component__WEBPACK_IMPORTED_MODULE_69__["AdminTimetableForstudentComponent"]
    }, {
      path: 'admin-timetable-forteacher',
      component: _admin_admin_timetable_forteacher_admin_timetable_forteacher_component__WEBPACK_IMPORTED_MODULE_70__["AdminTimetableForteacherComponent"]
    }, {
      path: 'admin-exam',
      component: _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_72__["AdminExamComponent"]
    }, {
      path: 'admin-exam-new',
      component: _admin_admin_exam_new_admin_exam_new_component__WEBPACK_IMPORTED_MODULE_73__["AdminExamNewComponent"]
    }, {
      path: 'admin-exam-manage',
      component: _admin_admin_exam_manage_admin_exam_manage_component__WEBPACK_IMPORTED_MODULE_74__["AdminExamManageComponent"]
    }, {
      path: 'admin-exam-editexam',
      component: _admin_admin_exam_editexam_admin_exam_editexam_component__WEBPACK_IMPORTED_MODULE_76__["AdminExamEditexamComponent"]
    }, {
      path: 'admin-exam-editresult',
      component: _admin_admin_exam_editresult_admin_exam_editresult_component__WEBPACK_IMPORTED_MODULE_75__["AdminExamEditresultComponent"]
    }, {
      path: 'admin-exam-report',
      component: _admin_admin_exam_report_admin_exam_report_component__WEBPACK_IMPORTED_MODULE_77__["AdminExamReportComponent"]
    }, {
      path: 'admin-academiccalendar',
      component: _admin_admin_academiccalendar_admin_academiccalendar_component__WEBPACK_IMPORTED_MODULE_78__["AdminAcademiccalendarComponent"]
    }, {
      path: 'admin-academiccalendar-create',
      component: _admin_admin_academiccalendar_create_admin_academiccalendar_create_component__WEBPACK_IMPORTED_MODULE_79__["AdminAcademiccalendarCreateComponent"]
    }, {
      path: 'admin-academiccalendar-fullcalendar',
      component: _admin_admin_academiccalendar_fullcalendar_admin_academiccalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_80__["AdminAcademiccalendarFullcalendarComponent"]
    }, {
      path: 'admin-gallery',
      component: _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_81__["AdminGalleryComponent"]
    }, {
      path: 'admin-gallery-create',
      component: _admin_admin_gallery_create_admin_gallery_create_component__WEBPACK_IMPORTED_MODULE_82__["AdminGalleryCreateComponent"]
    }, {
      path: 'admin-gallery-view',
      component: _admin_admin_gallery_view_admin_gallery_view_component__WEBPACK_IMPORTED_MODULE_83__["AdminGalleryViewComponent"]
    }, {
      path: 'admin-inquiry',
      component: _admin_admin_inquiry_admin_inquiry_component__WEBPACK_IMPORTED_MODULE_84__["AdminInquiryComponent"]
    }, {
      path: 'admin-chat',
      component: _admin_admin_chat_admin_chat_component__WEBPACK_IMPORTED_MODULE_85__["AdminChatComponent"]
    }, {
      path: 'admin-elibrary',
      component: _admin_admin_elibrary_admin_elibrary_component__WEBPACK_IMPORTED_MODULE_86__["AdminElibraryComponent"]
    }, {
      path: 'admin-elibrary-add',
      component: _admin_admin_elibrary_add_admin_elibrary_add_component__WEBPACK_IMPORTED_MODULE_87__["AdminElibraryAddComponent"]
    }, {
      path: 'admin-elibrary-view',
      component: _admin_admin_elibrary_view_admin_elibrary_view_component__WEBPACK_IMPORTED_MODULE_88__["AdminElibraryViewComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [// Public
      _public_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _public_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _public_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _public_our_mission_our_mission_component__WEBPACK_IMPORTED_MODULE_4__["OurMissionComponent"], _public_our_vision_our_vision_component__WEBPACK_IMPORTED_MODULE_5__["OurVisionComponent"], _public_student_goals_student_goals_component__WEBPACK_IMPORTED_MODULE_6__["StudentGoalsComponent"], _public_chairmans_desk_chairmans_desk_component__WEBPACK_IMPORTED_MODULE_7__["ChairmansDeskComponent"], _public_principals_desk_principals_desk_component__WEBPACK_IMPORTED_MODULE_8__["PrincipalsDeskComponent"], _public_classes_classes_component__WEBPACK_IMPORTED_MODULE_9__["ClassesComponent"], _public_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_10__["WhyUsComponent"], _public_academic_session_academic_session_component__WEBPACK_IMPORTED_MODULE_11__["AcademicSessionComponent"], _public_admission_procedure_admission_procedure_component__WEBPACK_IMPORTED_MODULE_12__["AdmissionProcedureComponent"], _public_between_us_portal_between_us_portal_component__WEBPACK_IMPORTED_MODULE_13__["BetweenUsPortalComponent"], _public_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_14__["TeachersComponent"], _public_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__["GalleryComponent"], _public_career_career_component__WEBPACK_IMPORTED_MODULE_16__["CareerComponent"], _public_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__["ContactusComponent"], // Login
      _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], // Super Admin
      _super_admin_common_super_header_super_header_component__WEBPACK_IMPORTED_MODULE_21__["SuperHeaderComponent"], _super_admin_super_dashboard_super_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["SuperDashboardComponent"], _super_admin_common_super_footer_super_footer_component__WEBPACK_IMPORTED_MODULE_23__["SuperFooterComponent"], _super_admin_common_super_sidebar_super_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SuperSidebarComponent"], _super_admin_super_school_super_school_component__WEBPACK_IMPORTED_MODULE_25__["SuperSchoolComponent"], _super_admin_super_school_add_super_school_add_component__WEBPACK_IMPORTED_MODULE_26__["SuperSchoolAddComponent"], _super_admin_super_school_edit_super_school_edit_component__WEBPACK_IMPORTED_MODULE_27__["SuperSchoolEditComponent"], _super_admin_super_school_list_super_school_list_component__WEBPACK_IMPORTED_MODULE_28__["SuperSchoolListComponent"], // Admin
      _admin_admin_confirmlogin_admin_confirmlogin_component__WEBPACK_IMPORTED_MODULE_29__["AdminConfirmloginComponent"], _admin_admin_confirmadmindetails_admin_confirmadmindetails_component__WEBPACK_IMPORTED_MODULE_30__["AdminConfirmadmindetailsComponent"], _admin_common_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_31__["AdminHeaderComponent"], _admin_common_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_32__["AdminFooterComponent"], _admin_common_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["AdminSidebarComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_34__["AdminDashboardComponent"], _admin_admin_configuration_admin_configuration_component__WEBPACK_IMPORTED_MODULE_35__["AdminConfigurationComponent"], _admin_admin_configuration_aboutschool_admin_configuration_aboutschool_component__WEBPACK_IMPORTED_MODULE_36__["AdminConfigurationAboutschoolComponent"], _admin_admin_configuration_institutecommittee_admin_configuration_institutecommittee_component__WEBPACK_IMPORTED_MODULE_37__["AdminConfigurationInstitutecommitteeComponent"], _admin_admin_configuration_institutedepartment_admin_configuration_institutedepartment_component__WEBPACK_IMPORTED_MODULE_38__["AdminConfigurationInstitutedepartmentComponent"], _admin_admin_configuration_instituteclass_admin_configuration_instituteclass_component__WEBPACK_IMPORTED_MODULE_39__["AdminConfigurationInstituteclassComponent"], _admin_admin_configuration_institutedivision_admin_configuration_institutedivision_component__WEBPACK_IMPORTED_MODULE_40__["AdminConfigurationInstitutedivisionComponent"], _admin_admin_configuration_subjectmanagement_admin_configuration_subjectmanagement_component__WEBPACK_IMPORTED_MODULE_41__["AdminConfigurationSubjectmanagementComponent"], _admin_admin_configuration_assignsubject_admin_configuration_assignsubject_component__WEBPACK_IMPORTED_MODULE_42__["AdminConfigurationAssignsubjectComponent"], _admin_admin_configuration_assignteacher_admin_configuration_assignteacher_component__WEBPACK_IMPORTED_MODULE_43__["AdminConfigurationAssignteacherComponent"], _admin_admin_configuration_fees_admin_configuration_fees_component__WEBPACK_IMPORTED_MODULE_44__["AdminConfigurationFeesComponent"], _admin_admin_configuration_homeslider_admin_configuration_homeslider_component__WEBPACK_IMPORTED_MODULE_45__["AdminConfigurationHomesliderComponent"], _admin_admin_configuration_secondaryadmin_admin_configuration_secondaryadmin_component__WEBPACK_IMPORTED_MODULE_46__["AdminConfigurationSecondaryadminComponent"], _admin_admin_configuration_attendanceediting_admin_configuration_attendanceediting_component__WEBPACK_IMPORTED_MODULE_47__["AdminConfigurationAttendanceeditingComponent"], _admin_admin_usermanagement_admin_usermanagement_component__WEBPACK_IMPORTED_MODULE_49__["AdminUsermanagementComponent"], _admin_admin_usermanagement_allusers_admin_usermanagement_allusers_component__WEBPACK_IMPORTED_MODULE_57__["AdminUsermanagementAllusersComponent"], _admin_admin_usermanagement_principal_admin_usermanagement_principal_component__WEBPACK_IMPORTED_MODULE_50__["AdminUsermanagementPrincipalComponent"], _admin_admin_usermanagement_hod_admin_usermanagement_hod_component__WEBPACK_IMPORTED_MODULE_51__["AdminUsermanagementHodComponent"], _admin_admin_usermanagement_classteacher_admin_usermanagement_classteacher_component__WEBPACK_IMPORTED_MODULE_52__["AdminUsermanagementClassteacherComponent"], _admin_admin_usermanagement_teacher_admin_usermanagement_teacher_component__WEBPACK_IMPORTED_MODULE_53__["AdminUsermanagementTeacherComponent"], _admin_admin_usermanagement_librarian_admin_usermanagement_librarian_component__WEBPACK_IMPORTED_MODULE_54__["AdminUsermanagementLibrarianComponent"], _admin_admin_usermanagement_accountant_admin_usermanagement_accountant_component__WEBPACK_IMPORTED_MODULE_55__["AdminUsermanagementAccountantComponent"], _admin_admin_usermanagement_busdriver_admin_usermanagement_busdriver_component__WEBPACK_IMPORTED_MODULE_56__["AdminUsermanagementBusdriverComponent"], _admin_admin_usermanagement_student_admin_usermanagement_student_component__WEBPACK_IMPORTED_MODULE_58__["AdminUsermanagementStudentComponent"], _admin_admin_usermanagement_studentstep2_admin_usermanagement_studentstep2_component__WEBPACK_IMPORTED_MODULE_59__["AdminUsermanagementStudentstep2Component"], _admin_admin_feesmanagement_admin_feesmanagement_component__WEBPACK_IMPORTED_MODULE_60__["AdminFeesmanagementComponent"], _admin_admin_feesmanagement_details_admin_feesmanagement_details_component__WEBPACK_IMPORTED_MODULE_61__["AdminFeesmanagementDetailsComponent"], _admin_admin_attendance_admin_attendance_component__WEBPACK_IMPORTED_MODULE_62__["AdminAttendanceComponent"], _admin_admin_attendance_newattendance_admin_attendance_newattendance_component__WEBPACK_IMPORTED_MODULE_63__["AdminAttendanceNewattendanceComponent"], _admin_admin_attendance_attendanceanalysis_admin_attendance_attendanceanalysis_component__WEBPACK_IMPORTED_MODULE_64__["AdminAttendanceAttendanceanalysisComponent"], _admin_admin_attendance_leaveapplication_admin_attendance_leaveapplication_component__WEBPACK_IMPORTED_MODULE_65__["AdminAttendanceLeaveapplicationComponent"], _admin_admin_feesmanagement_list_admin_feesmanagement_list_component__WEBPACK_IMPORTED_MODULE_66__["AdminFeesmanagementListComponent"], _admin_admin_feesmanagement_analysis_admin_feesmanagement_analysis_component__WEBPACK_IMPORTED_MODULE_67__["AdminFeesmanagementAnalysisComponent"], _admin_admin_timetable_admin_timetable_component__WEBPACK_IMPORTED_MODULE_68__["AdminTimetableComponent"], _admin_admin_timetable_forstudent_admin_timetable_forstudent_component__WEBPACK_IMPORTED_MODULE_69__["AdminTimetableForstudentComponent"], _admin_admin_timetable_forteacher_admin_timetable_forteacher_component__WEBPACK_IMPORTED_MODULE_70__["AdminTimetableForteacherComponent"], _admin_admin_timetable_setup_admin_timetable_setup_component__WEBPACK_IMPORTED_MODULE_71__["AdminTimetableSetupComponent"], _admin_admin_configuration_applicationlabel_admin_configuration_applicationlabel_component__WEBPACK_IMPORTED_MODULE_48__["AdminConfigurationApplicationlabelComponent"], _admin_admin_exam_admin_exam_component__WEBPACK_IMPORTED_MODULE_72__["AdminExamComponent"], _admin_admin_exam_new_admin_exam_new_component__WEBPACK_IMPORTED_MODULE_73__["AdminExamNewComponent"], _admin_admin_exam_manage_admin_exam_manage_component__WEBPACK_IMPORTED_MODULE_74__["AdminExamManageComponent"], _admin_admin_exam_editresult_admin_exam_editresult_component__WEBPACK_IMPORTED_MODULE_75__["AdminExamEditresultComponent"], _admin_admin_exam_editexam_admin_exam_editexam_component__WEBPACK_IMPORTED_MODULE_76__["AdminExamEditexamComponent"], _admin_admin_exam_report_admin_exam_report_component__WEBPACK_IMPORTED_MODULE_77__["AdminExamReportComponent"], _admin_admin_academiccalendar_admin_academiccalendar_component__WEBPACK_IMPORTED_MODULE_78__["AdminAcademiccalendarComponent"], _admin_admin_academiccalendar_create_admin_academiccalendar_create_component__WEBPACK_IMPORTED_MODULE_79__["AdminAcademiccalendarCreateComponent"], _admin_admin_academiccalendar_fullcalendar_admin_academiccalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_80__["AdminAcademiccalendarFullcalendarComponent"], _admin_admin_gallery_admin_gallery_component__WEBPACK_IMPORTED_MODULE_81__["AdminGalleryComponent"], _admin_admin_gallery_create_admin_gallery_create_component__WEBPACK_IMPORTED_MODULE_82__["AdminGalleryCreateComponent"], _admin_admin_gallery_view_admin_gallery_view_component__WEBPACK_IMPORTED_MODULE_83__["AdminGalleryViewComponent"], _admin_admin_inquiry_admin_inquiry_component__WEBPACK_IMPORTED_MODULE_84__["AdminInquiryComponent"], _admin_admin_chat_admin_chat_component__WEBPACK_IMPORTED_MODULE_85__["AdminChatComponent"], _admin_admin_elibrary_admin_elibrary_component__WEBPACK_IMPORTED_MODULE_86__["AdminElibraryComponent"], _admin_admin_elibrary_add_admin_elibrary_add_component__WEBPACK_IMPORTED_MODULE_87__["AdminElibraryAddComponent"], _admin_admin_elibrary_view_admin_elibrary_view_component__WEBPACK_IMPORTED_MODULE_88__["AdminElibraryViewComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'school-management';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/public/academic-session/academic-session.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/public/academic-session/academic-session.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicAcademicSessionAcademicSessionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hY2FkZW1pYy1zZXNzaW9uL2FjYWRlbWljLXNlc3Npb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/academic-session/academic-session.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/public/academic-session/academic-session.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AcademicSessionComponent */

  /***/
  function srcAppPublicAcademicSessionAcademicSessionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcademicSessionComponent", function () {
      return AcademicSessionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AcademicSessionComponent =
    /*#__PURE__*/
    function () {
      function AcademicSessionComponent() {
        _classCallCheck(this, AcademicSessionComponent);
      }

      _createClass(AcademicSessionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return AcademicSessionComponent;
    }();

    AcademicSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-academic-session',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./academic-session.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/academic-session/academic-session.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./academic-session.component.scss */
      "./src/app/public/academic-session/academic-session.component.scss")).default]
    })], AcademicSessionComponent);
    /***/
  },

  /***/
  "./src/app/public/admission-procedure/admission-procedure.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/public/admission-procedure/admission-procedure.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicAdmissionProcedureAdmissionProcedureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9hZG1pc3Npb24tcHJvY2VkdXJlL2FkbWlzc2lvbi1wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/admission-procedure/admission-procedure.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/public/admission-procedure/admission-procedure.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AdmissionProcedureComponent */

  /***/
  function srcAppPublicAdmissionProcedureAdmissionProcedureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionProcedureComponent", function () {
      return AdmissionProcedureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdmissionProcedureComponent =
    /*#__PURE__*/
    function () {
      function AdmissionProcedureComponent() {
        _classCallCheck(this, AdmissionProcedureComponent);
      }

      _createClass(AdmissionProcedureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return AdmissionProcedureComponent;
    }();

    AdmissionProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admission-procedure',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admission-procedure.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/admission-procedure/admission-procedure.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admission-procedure.component.scss */
      "./src/app/public/admission-procedure/admission-procedure.component.scss")).default]
    })], AdmissionProcedureComponent);
    /***/
  },

  /***/
  "./src/app/public/between-us-portal/between-us-portal.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/public/between-us-portal/between-us-portal.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicBetweenUsPortalBetweenUsPortalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9iZXR3ZWVuLXVzLXBvcnRhbC9iZXR3ZWVuLXVzLXBvcnRhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/public/between-us-portal/between-us-portal.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/public/between-us-portal/between-us-portal.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BetweenUsPortalComponent */

  /***/
  function srcAppPublicBetweenUsPortalBetweenUsPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BetweenUsPortalComponent", function () {
      return BetweenUsPortalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BetweenUsPortalComponent =
    /*#__PURE__*/
    function () {
      function BetweenUsPortalComponent() {
        _classCallCheck(this, BetweenUsPortalComponent);
      }

      _createClass(BetweenUsPortalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return BetweenUsPortalComponent;
    }();

    BetweenUsPortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-between-us-portal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./between-us-portal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/between-us-portal/between-us-portal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./between-us-portal.component.scss */
      "./src/app/public/between-us-portal/between-us-portal.component.scss")).default]
    })], BetweenUsPortalComponent);
    /***/
  },

  /***/
  "./src/app/public/career/career.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/public/career/career.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicCareerCareerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jYXJlZXIvY2FyZWVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/public/career/career.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/public/career/career.component.ts ***!
    \***************************************************/

  /*! exports provided: CareerComponent */

  /***/
  function srcAppPublicCareerCareerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CareerComponent", function () {
      return CareerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CareerComponent =
    /*#__PURE__*/
    function () {
      function CareerComponent() {
        _classCallCheck(this, CareerComponent);
      }

      _createClass(CareerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return CareerComponent;
    }();

    CareerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-career',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./career.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/career/career.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./career.component.scss */
      "./src/app/public/career/career.component.scss")).default]
    })], CareerComponent);
    /***/
  },

  /***/
  "./src/app/public/chairmans-desk/chairmans-desk.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/public/chairmans-desk/chairmans-desk.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicChairmansDeskChairmansDeskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jaGFpcm1hbnMtZGVzay9jaGFpcm1hbnMtZGVzay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/public/chairmans-desk/chairmans-desk.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/public/chairmans-desk/chairmans-desk.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ChairmansDeskComponent */

  /***/
  function srcAppPublicChairmansDeskChairmansDeskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChairmansDeskComponent", function () {
      return ChairmansDeskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChairmansDeskComponent =
    /*#__PURE__*/
    function () {
      function ChairmansDeskComponent() {
        _classCallCheck(this, ChairmansDeskComponent);
      }

      _createClass(ChairmansDeskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return ChairmansDeskComponent;
    }();

    ChairmansDeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chairmans-desk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chairmans-desk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/chairmans-desk/chairmans-desk.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chairmans-desk.component.scss */
      "./src/app/public/chairmans-desk/chairmans-desk.component.scss")).default]
    })], ChairmansDeskComponent);
    /***/
  },

  /***/
  "./src/app/public/classes/classes.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/public/classes/classes.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicClassesClassesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jbGFzc2VzL2NsYXNzZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/classes/classes.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/public/classes/classes.component.ts ***!
    \*****************************************************/

  /*! exports provided: ClassesComponent */

  /***/
  function srcAppPublicClassesClassesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassesComponent", function () {
      return ClassesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClassesComponent =
    /*#__PURE__*/
    function () {
      function ClassesComponent() {
        _classCallCheck(this, ClassesComponent);
      }

      _createClass(ClassesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return ClassesComponent;
    }();

    ClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./classes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/classes/classes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./classes.component.scss */
      "./src/app/public/classes/classes.component.scss")).default]
    })], ClassesComponent);
    /***/
  },

  /***/
  "./src/app/public/contactus/contactus.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/public/contactus/contactus.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicContactusContactusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/public/contactus/contactus.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/public/contactus/contactus.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppPublicContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactusComponent =
    /*#__PURE__*/
    function () {
      function ContactusComponent() {
        _classCallCheck(this, ContactusComponent);
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return ContactusComponent;
    }();

    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/contactus/contactus.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactus.component.scss */
      "./src/app/public/contactus/contactus.component.scss")).default]
    })], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/public/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/public/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/public/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/public/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPublicFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/public/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/public/gallery/gallery.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/public/gallery/gallery.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicGalleryGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/gallery/gallery.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/public/gallery/gallery.component.ts ***!
    \*****************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppPublicGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/gallery/gallery.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery.component.scss */
      "./src/app/public/gallery/gallery.component.scss")).default]
    })], GalleryComponent);
    /***/
  },

  /***/
  "./src/app/public/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/public/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/public/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/public/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPublicHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/public/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/public/home/home.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/public/home/home.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/home/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/public/home/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPublicHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/public/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/public/our-mission/our-mission.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/public/our-mission/our-mission.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicOurMissionOurMissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9vdXItbWlzc2lvbi9vdXItbWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/public/our-mission/our-mission.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/public/our-mission/our-mission.component.ts ***!
    \*************************************************************/

  /*! exports provided: OurMissionComponent */

  /***/
  function srcAppPublicOurMissionOurMissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurMissionComponent", function () {
      return OurMissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OurMissionComponent =
    /*#__PURE__*/
    function () {
      function OurMissionComponent() {
        _classCallCheck(this, OurMissionComponent);
      }

      _createClass(OurMissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return OurMissionComponent;
    }();

    OurMissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-mission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./our-mission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/our-mission/our-mission.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./our-mission.component.scss */
      "./src/app/public/our-mission/our-mission.component.scss")).default]
    })], OurMissionComponent);
    /***/
  },

  /***/
  "./src/app/public/our-vision/our-vision.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/public/our-vision/our-vision.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicOurVisionOurVisionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9vdXItdmlzaW9uL291ci12aXNpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/our-vision/our-vision.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/public/our-vision/our-vision.component.ts ***!
    \***********************************************************/

  /*! exports provided: OurVisionComponent */

  /***/
  function srcAppPublicOurVisionOurVisionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurVisionComponent", function () {
      return OurVisionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OurVisionComponent =
    /*#__PURE__*/
    function () {
      function OurVisionComponent() {
        _classCallCheck(this, OurVisionComponent);
      }

      _createClass(OurVisionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return OurVisionComponent;
    }();

    OurVisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-vision',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./our-vision.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/our-vision/our-vision.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./our-vision.component.scss */
      "./src/app/public/our-vision/our-vision.component.scss")).default]
    })], OurVisionComponent);
    /***/
  },

  /***/
  "./src/app/public/principals-desk/principals-desk.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/public/principals-desk/principals-desk.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicPrincipalsDeskPrincipalsDeskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wcmluY2lwYWxzLWRlc2svcHJpbmNpcGFscy1kZXNrLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/public/principals-desk/principals-desk.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/public/principals-desk/principals-desk.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PrincipalsDeskComponent */

  /***/
  function srcAppPublicPrincipalsDeskPrincipalsDeskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalsDeskComponent", function () {
      return PrincipalsDeskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrincipalsDeskComponent =
    /*#__PURE__*/
    function () {
      function PrincipalsDeskComponent() {
        _classCallCheck(this, PrincipalsDeskComponent);
      }

      _createClass(PrincipalsDeskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return PrincipalsDeskComponent;
    }();

    PrincipalsDeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-principals-desk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./principals-desk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/principals-desk/principals-desk.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./principals-desk.component.scss */
      "./src/app/public/principals-desk/principals-desk.component.scss")).default]
    })], PrincipalsDeskComponent);
    /***/
  },

  /***/
  "./src/app/public/student-goals/student-goals.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/public/student-goals/student-goals.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicStudentGoalsStudentGoalsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zdHVkZW50LWdvYWxzL3N0dWRlbnQtZ29hbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/public/student-goals/student-goals.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/public/student-goals/student-goals.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StudentGoalsComponent */

  /***/
  function srcAppPublicStudentGoalsStudentGoalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentGoalsComponent", function () {
      return StudentGoalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentGoalsComponent =
    /*#__PURE__*/
    function () {
      function StudentGoalsComponent() {
        _classCallCheck(this, StudentGoalsComponent);
      }

      _createClass(StudentGoalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return StudentGoalsComponent;
    }();

    StudentGoalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student-goals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-goals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/student-goals/student-goals.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-goals.component.scss */
      "./src/app/public/student-goals/student-goals.component.scss")).default]
    })], StudentGoalsComponent);
    /***/
  },

  /***/
  "./src/app/public/teachers/teachers.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/public/teachers/teachers.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicTeachersTeachersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy90ZWFjaGVycy90ZWFjaGVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/public/teachers/teachers.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/public/teachers/teachers.component.ts ***!
    \*******************************************************/

  /*! exports provided: TeachersComponent */

  /***/
  function srcAppPublicTeachersTeachersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachersComponent", function () {
      return TeachersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TeachersComponent =
    /*#__PURE__*/
    function () {
      function TeachersComponent() {
        _classCallCheck(this, TeachersComponent);
      }

      _createClass(TeachersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return TeachersComponent;
    }();

    TeachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teachers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teachers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/teachers/teachers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teachers.component.scss */
      "./src/app/public/teachers/teachers.component.scss")).default]
    })], TeachersComponent);
    /***/
  },

  /***/
  "./src/app/public/why-us/why-us.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/public/why-us/why-us.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicWhyUsWhyUsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy93aHktdXMvd2h5LXVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/public/why-us/why-us.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/public/why-us/why-us.component.ts ***!
    \***************************************************/

  /*! exports provided: WhyUsComponent */

  /***/
  function srcAppPublicWhyUsWhyUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhyUsComponent", function () {
      return WhyUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WhyUsComponent =
    /*#__PURE__*/
    function () {
      function WhyUsComponent() {
        _classCallCheck(this, WhyUsComponent);
      }

      _createClass(WhyUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scroll(0, 0);
        }
      }]);

      return WhyUsComponent;
    }();

    WhyUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-why-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./why-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/why-us/why-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./why-us.component.scss */
      "./src/app/public/why-us/why-us.component.scss")).default]
    })], WhyUsComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/common/super-footer/super-footer.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/super-admin/common/super-footer/super-footer.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminCommonSuperFooterSuperFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL2NvbW1vbi9zdXBlci1mb290ZXIvc3VwZXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/super-admin/common/super-footer/super-footer.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/super-admin/common/super-footer/super-footer.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SuperFooterComponent */

  /***/
  function srcAppSuperAdminCommonSuperFooterSuperFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperFooterComponent", function () {
      return SuperFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperFooterComponent =
    /*#__PURE__*/
    function () {
      function SuperFooterComponent() {
        _classCallCheck(this, SuperFooterComponent);
      }

      _createClass(SuperFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperFooterComponent;
    }();

    SuperFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-footer/super-footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-footer.component.scss */
      "./src/app/super-admin/common/super-footer/super-footer.component.scss")).default]
    })], SuperFooterComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/common/super-header/super-header.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/super-admin/common/super-header/super-header.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminCommonSuperHeaderSuperHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL2NvbW1vbi9zdXBlci1oZWFkZXIvc3VwZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/super-admin/common/super-header/super-header.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/super-admin/common/super-header/super-header.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SuperHeaderComponent */

  /***/
  function srcAppSuperAdminCommonSuperHeaderSuperHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperHeaderComponent", function () {
      return SuperHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperHeaderComponent =
    /*#__PURE__*/
    function () {
      function SuperHeaderComponent() {
        _classCallCheck(this, SuperHeaderComponent);
      }

      _createClass(SuperHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperHeaderComponent;
    }();

    SuperHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-header/super-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-header.component.scss */
      "./src/app/super-admin/common/super-header/super-header.component.scss")).default]
    })], SuperHeaderComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/common/super-sidebar/super-sidebar.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/super-admin/common/super-sidebar/super-sidebar.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminCommonSuperSidebarSuperSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL2NvbW1vbi9zdXBlci1zaWRlYmFyL3N1cGVyLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/super-admin/common/super-sidebar/super-sidebar.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/super-admin/common/super-sidebar/super-sidebar.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SuperSidebarComponent */

  /***/
  function srcAppSuperAdminCommonSuperSidebarSuperSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperSidebarComponent", function () {
      return SuperSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperSidebarComponent =
    /*#__PURE__*/
    function () {
      function SuperSidebarComponent() {
        _classCallCheck(this, SuperSidebarComponent);
      }

      _createClass(SuperSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperSidebarComponent;
    }();

    SuperSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/common/super-sidebar/super-sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-sidebar.component.scss */
      "./src/app/super-admin/common/super-sidebar/super-sidebar.component.scss")).default]
    })], SuperSidebarComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/super-dashboard/super-dashboard.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/super-admin/super-dashboard/super-dashboard.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminSuperDashboardSuperDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLWRhc2hib2FyZC9zdXBlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/super-admin/super-dashboard/super-dashboard.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/super-admin/super-dashboard/super-dashboard.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SuperDashboardComponent */

  /***/
  function srcAppSuperAdminSuperDashboardSuperDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperDashboardComponent", function () {
      return SuperDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperDashboardComponent =
    /*#__PURE__*/
    function () {
      function SuperDashboardComponent() {
        _classCallCheck(this, SuperDashboardComponent);
      }

      _createClass(SuperDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperDashboardComponent;
    }();

    SuperDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-dashboard/super-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-dashboard.component.scss */
      "./src/app/super-admin/super-dashboard/super-dashboard.component.scss")).default]
    })], SuperDashboardComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/super-school-add/super-school-add.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/super-admin/super-school-add/super-school-add.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminSuperSchoolAddSuperSchoolAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLXNjaG9vbC1hZGQvc3VwZXItc2Nob29sLWFkZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/super-admin/super-school-add/super-school-add.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/super-admin/super-school-add/super-school-add.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SuperSchoolAddComponent */

  /***/
  function srcAppSuperAdminSuperSchoolAddSuperSchoolAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperSchoolAddComponent", function () {
      return SuperSchoolAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperSchoolAddComponent =
    /*#__PURE__*/
    function () {
      function SuperSchoolAddComponent() {
        _classCallCheck(this, SuperSchoolAddComponent);
      }

      _createClass(SuperSchoolAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperSchoolAddComponent;
    }();

    SuperSchoolAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-school-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-school-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-add/super-school-add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-school-add.component.scss */
      "./src/app/super-admin/super-school-add/super-school-add.component.scss")).default]
    })], SuperSchoolAddComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/super-school-edit/super-school-edit.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/super-admin/super-school-edit/super-school-edit.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminSuperSchoolEditSuperSchoolEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLXNjaG9vbC1lZGl0L3N1cGVyLXNjaG9vbC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/super-admin/super-school-edit/super-school-edit.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/super-admin/super-school-edit/super-school-edit.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SuperSchoolEditComponent */

  /***/
  function srcAppSuperAdminSuperSchoolEditSuperSchoolEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperSchoolEditComponent", function () {
      return SuperSchoolEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperSchoolEditComponent =
    /*#__PURE__*/
    function () {
      function SuperSchoolEditComponent() {
        _classCallCheck(this, SuperSchoolEditComponent);
      }

      _createClass(SuperSchoolEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperSchoolEditComponent;
    }();

    SuperSchoolEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-school-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-school-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-edit/super-school-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-school-edit.component.scss */
      "./src/app/super-admin/super-school-edit/super-school-edit.component.scss")).default]
    })], SuperSchoolEditComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/super-school-list/super-school-list.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/super-admin/super-school-list/super-school-list.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminSuperSchoolListSuperSchoolListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLXNjaG9vbC1saXN0L3N1cGVyLXNjaG9vbC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/super-admin/super-school-list/super-school-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/super-admin/super-school-list/super-school-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SuperSchoolListComponent */

  /***/
  function srcAppSuperAdminSuperSchoolListSuperSchoolListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperSchoolListComponent", function () {
      return SuperSchoolListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperSchoolListComponent =
    /*#__PURE__*/
    function () {
      function SuperSchoolListComponent() {
        _classCallCheck(this, SuperSchoolListComponent);
      }

      _createClass(SuperSchoolListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperSchoolListComponent;
    }();

    SuperSchoolListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-school-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-school-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school-list/super-school-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-school-list.component.scss */
      "./src/app/super-admin/super-school-list/super-school-list.component.scss")).default]
    })], SuperSchoolListComponent);
    /***/
  },

  /***/
  "./src/app/super-admin/super-school/super-school.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/super-admin/super-school/super-school.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminSuperSchoolSuperSchoolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLXNjaG9vbC9zdXBlci1zY2hvb2wuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/super-admin/super-school/super-school.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/super-admin/super-school/super-school.component.ts ***!
    \********************************************************************/

  /*! exports provided: SuperSchoolComponent */

  /***/
  function srcAppSuperAdminSuperSchoolSuperSchoolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperSchoolComponent", function () {
      return SuperSchoolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuperSchoolComponent =
    /*#__PURE__*/
    function () {
      function SuperSchoolComponent() {
        _classCallCheck(this, SuperSchoolComponent);
      }

      _createClass(SuperSchoolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuperSchoolComponent;
    }();

    SuperSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-school',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-school.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/super-admin/super-school/super-school.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-school.component.scss */
      "./src/app/super-admin/super-school/super-school.component.scss")).default]
    })], SuperSchoolComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Pankaj\Data\edutech\school-management\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map