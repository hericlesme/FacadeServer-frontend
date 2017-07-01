import {ResourceSubscriberTabModel} from "../ResourceSubscriberTabModel";
import {TabModel} from "../TabModel";
import {HomeTabState} from "./HomeTabState";

export class HomeTabModel extends ResourceSubscriberTabModel<HomeTabState> {

  public getName(): string {
    return "Home";
  }

  public getSubscribedResourceNames(): string[] {
    return ["onlinePlayers"];
  }

  public getDefaultState(): HomeTabState {
    return {onlinePlayers: []};
  }

  public onResourceUpdated(resourceName: string, data: any): void {
    if (resourceName === "onlinePlayers") {
      this.update({onlinePlayers: data as string[]});
    }
  }

}
