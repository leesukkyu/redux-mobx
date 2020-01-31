import { observable, action } from "mobx";
import axios from "axios";

export default class CounterStore {
  @observable number = 0;
  @observable users = [];

  @action increase = () => {
    this.number++;
  };

  @action decrease = () => {
    this.number--;
  };

  @action setUsers = users => {
    this.users = [...users];
  };

  @action getUsers() {
    // ajax 호출과 MobX action의 동기화
    axios.get("http://jsonplaceholder.typicode.com/users").then(response => {
      this.setUsers(response.data);
    });
  }
}
