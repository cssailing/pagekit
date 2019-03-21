import UIkit from 'uikit';
import {
    $, on, css, append, addClass, removeClass, hasClass, attr, toNodes, each, find, findAll,
} from 'uikit-util';

import Version from '../../../../../installer/app/lib/version';

import Panel from '../components/widget-panel.vue';
import Feed from '../components/widget-feed.vue';
import Location from '../components/widget-location.vue';

window.Dashboard = {

    name: 'dashboard',

    el: '#dashboard',

    data() {
        return _.extend({
            editing: {},
            update: {},
        }, window.$data);
    },

    created() {
        const self = this;

        this.Widgets = this.$resource('admin/dashboard{/id}');

        this.$set(this, 'widgets', this.widgets.filter((widget, idx) => {
            if (self.getType(widget.type)) {
                widget.idx = widget.idx === undefined ? idx : widget.idx;
                widget.column = widget.column === undefined ? 0 : widget.column;

                return true;
            }

            return false;
        }));

        this.checkVersion();
    },

    mounted() {
        const self = this;

        // widget re-ordering
        const sortables = findAll('.uk-sortable[data-column]', $(this.$el));
        sortables.forEach((el) => {
            const sortableItem = UIkit.sortable(el, { group: 'widgets', dragCustomClass: 'pk-sortable-dragged-panel', handleClass: 'pk-icon-handle' });

            UIkit.util.on(sortableItem.$el, 'added moved removed', (e, sortable, item, mode) => {
                var mode = e.type;

                if (!mode) {
                    return;
                }

                switch (mode) {
                case 'added':
                case 'moved':
                case 'removed':

                    var { widgets } = self;
                    var column = parseInt(sortable.$options.el.dataset.column, 10);
                    var data = {};
                    var widget;

                    findAll('[data-idx]', $(sortable.$el)).forEach((item) => {
                        const idx = item.getAttribute('data-idx');

                        widget = _.find(widgets, 'id', item.getAttribute('data-id'));
                        widget.column = column;
                        widget.idx = idx;
                    });

                    widgets.forEach((widget) => {
                        data[widget.id] = widget;
                    });

                    self.$http.post('admin/dashboard/savewidgets', { widgets: data }).then(() => {

                        // cleanup empty items - maybe fixed with future vue.js version
                        // sortables.children().forEach(function () {
                        // if (!this.children.length) $(this).remove();
                        // });
                    });
                }
            });
        });
    },

    computed: {

        columns() {
            let i = 0;
            return _.groupBy(this.widgets, () => i++ % 3);
        },

        hasUpdate() {
            return this.update && Version.compare(this.update.version, this.version, '>');
        },

    },

    methods: {

        getColumn(column) {
            column = parseInt(column || 0, 10);

            return _.sortBy(this.widgets.filter(widget => widget.column == column), 'idx');
        },

        add(type) {
            let column = 0;
            const sortables = findAll('.uk-sortable[data-column]', $('#dashboard'));// $('#dashboard').find('.uk-sortable[data-column]');

            // sortables.each(function (idx) {
            sortables.forEach((el, idx) => {
                column = (el.children.length < toNodes(sortables)[0].children.length) ? idx : column;
            });

            this.Widgets.save({ widget: _.merge({ type: type.id, column, idx: 100 }, type.defaults) }).then(function (res) {
                const { data } = res;
                this.widgets.push(data);
                this.editing[data.id] = true;
            });
        },

        save(widget) {
            const data = { widget };

            this.$emit('save', data);
            this.$trigger('save:widget', data);
            this.Widgets.save({ id: widget.id }, data);
        },

        remove(widget) {
            this.Widgets.delete({ id: widget.id }).then(function () {
                this.widgets.splice(_.findIndex(this.widgets, { id: widget.id }), 1);
            });
        },

        getType(id) {
            return _.find(this.getTypes(), { id });
        },

        getTypes() {
            const types = [];

            _.forIn(this.$options.components, (component, name) => {
                const { type } = component;

                if (type) {
                    type.component = name;
                    types.push(type);
                }
            });

            return types;
        },

        checkVersion() {
            this.$http.get(`${this.api}/api/update`, { cache: 60 }).then(function (res) {
                const update = res.data[this.channel == 'nightly' ? 'nightly' : 'latest'];

                if (update) {
                    this.$set(this, 'update', update);
                }
            });
        },

    },

    components: {

        panel: Panel,
        feed: Feed,
        location: Location,

    },

};

Vue.ready(window.Dashboard);