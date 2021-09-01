const apiHost = 'https://bakesaleforgood.com';

export const fetchInitialDeals = async () => {
  try {
    const response = await fetch(apiHost + '/api/deals');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDealDetail = async (dealId: string) => {
  try {
    const response = await fetch(apiHost + '/api/deals/' + dealId);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
