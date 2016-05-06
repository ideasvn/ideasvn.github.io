angular.module('app.directives', [])
    .directive('icheck', function () {
        var icheck = {
            restrict: 'EA',
            link: function (scope, el, attrs) {
                var options = {
                    checkboxClass: 'icheckbox_square-yellow',
                    radioClass: 'iradio_square-yellow',
                    increaseArea: '20%' // optional
                };

                angular.element(document).ready(function() {
                    scope.$icheck = $(el).iCheck(options);
                });
            }
        };

        return icheck;
    });
