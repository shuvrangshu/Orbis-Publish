import { environment } from '../../../../environments/environment';

const serverUrl = environment.serverUrl;

export const MIX_DESIGN_WEB_API = {
    CODE_LIST: { url: serverUrl + '', mockData: './assets/data/data.json' }
};
