import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addMessage: function() {
            var newMessage = this.store.createRecord('message', {
                name: this.get('name'),
                body: this.get('body')
            });
            newMessage.save();
            this.setProperties({
                name: '',
                body: ''
            });
        }
    }
});
