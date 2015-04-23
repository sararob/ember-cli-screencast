import Ember from 'ember';

export default Ember.Controller.extend({
    name: 'Guest' + Math.floor(Math.random() * 100),
    body: '',

    actions: {
        addMessage: function() {
            var newMessage = this.store.createRecord('message', {
                name: this.get('name'),
                body: this.get('body'),
                timestamp: Date.now()
            });
            newMessage.save().then(function() {
                this.set('body', '');
            }.bind(this));
        }
    }
});
