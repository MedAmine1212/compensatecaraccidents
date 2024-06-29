import states from '@/states.json';
export const fetchStateFullName = (abbreviation: string) => {
    const state = states[abbreviation];
    return state ? state : abbreviation;
};