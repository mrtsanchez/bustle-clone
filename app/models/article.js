import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  teaser: DS.attr(),
  text: DS.attr(),
  image: DS.attr()
});
