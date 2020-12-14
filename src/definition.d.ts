interface ScreenProp {
  navigation: {
    goBack: () => void;
    push: (routeName: string, params?: any) => void;
    getParam: (paramName: string, defaultValue?: any) => any;
    navigate: (routeName: string, params?: any) => void;
    replace: (routeName: string, params?: any) => void;
    state: {
      routeName: string;
      key: string;
      params: any;
    };
  };
  route?: {
    params: any;
    name: string;
  };
}

interface Media {
  url?: string;
  type?: string;
  media?: string;
  size?: {
    width: string | number;
    height: string | number;
  };
}
