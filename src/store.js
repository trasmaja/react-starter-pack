import { computed, observable } from 'mobx';

class Store {
    @observable demo = "test demo text"
}

var store = new Store;

export default store;