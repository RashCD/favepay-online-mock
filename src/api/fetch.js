async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify(data),
    });
    if (response.ok) return response.json();
  } catch (error) {
    return error;
  }
}

export const fetchQRCodes = ({
  reference,
  price,
  appId,
  outletId,
  ...details
}) =>
  postData(
    'https://fave-staging-kaneru.app.fave.ninja/api/fpo/v1/my/qr_codes',
    {
      online_reference: reference,
      total_amount_cents: price,
      app_id: appId,
      tid: outletId,
      shopper_details: details,
      redirect_url: window.location.href,
      format: 'web_url',
      sign: '123nothing456',
    }
  );
