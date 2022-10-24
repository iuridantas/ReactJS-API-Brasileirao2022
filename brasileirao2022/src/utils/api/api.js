const defaultUrl = 'https://api-teamsbrazilian2022.herokuapp.com';

export const api = {
  createTime: async (time) => {
    const response = await fetch(defaultUrl + '/seriea/create', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(time),
    });
    const newTime = await response.json();
    return newTime;
  },

  getAllTimes: async () => {
    const response = await fetch(defaultUrl + '/seriea');
    const allTimes = await response.json();
    return allTimes;
  },

  deleteTime: async (timeId) => {
    const response = await fetch(defaultUrl + '/seriea/delete/' + timeId, {
      method: 'DELETE',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const timeDeleted = await response.json();
    return timeDeleted;
  },

  updateTime: async (time) => {
    const response = await fetch(
      defaultUrl + '/seriea/update/' + time._id,
      {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(time),
      },
    );
    const timeUpdated = await response.json();
    return timeUpdated;
  },
};