const apiHost = 'https://bakesaleforgood.com';

export const fetchInitialDeals = async () => {
  try {
    let response = await fetch(apiHost + '/api/deals');
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDealDetail = async (dealId: string) => {
  try {
    let response = await fetch(apiHost + '/api/deals/' + dealId);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
