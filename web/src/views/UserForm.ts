import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.change-name": this.onChangeName,
      "click:.save-model": this.onSave,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onChangeName = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSave = (): void => {
    this.model.save();
  };

  template(): string {
    const model = this.model;
    return `
    <div>
      <input placeholder="${model.get("name")}"/>
      <button class="change-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>
    `;
  }
}
