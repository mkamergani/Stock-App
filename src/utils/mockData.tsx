const chartMockData = [
  { value: '0.78', date: '2/19/2023' },
  { value: '0.79', date: '2/20/2023' },
  { value: '0.67', date: '2/21/2023' },
  { value: '0.72', date: '2/22/2023' },
  { value: '0.67', date: '2/23/2023' },
  { value: '0.61', date: '2/24/2023' },
  { value: '0.64', date: '2/25/2023' },
  { value: '0.67', date: '2/26/2023' },
  { value: '0.71', date: '2/27/2023' },
  { value: '0.77', date: '2/28/2023' },
  { value: '0.77', date: '3/1/2023' },
  { value: '0.72', date: '3/2/2023' },
  { value: '0.70', date: '3/3/2023' },
  { value: '0.71', date: '3/4/2023' },
  { value: '0.67', date: '3/5/2023' },
  { value: '0.63', date: '3/6/2023' },
  { value: '0.56', date: '3/7/2023' },
  { value: '0.53', date: '3/8/2023' },
  { value: '0.46', date: '3/9/2023' },
  { value: '0.40', date: '3/10/2023' },
  { value: '0.42', date: '3/11/2023' },
  { value: '0.60', date: '3/12/2023' },
  { value: '0.73', date: '3/13/2023' },
  { value: '0.65', date: '3/14/2023' },
  { value: '0.71', date: '3/15/2023' },
  { value: '0.73', date: '3/16/2023' },
  { value: '0.73', date: '3/17/2023' },
  { value: '0.71', date: '3/18/2023' },
  { value: '0.69', date: '3/19/2023' },
  { value: '0.67', date: '3/20/2023' },
  { value: '0.72', date: '3/21/2023' },
  { value: '0.70', date: '3/22/2023' },
  { value: '0.65', date: '3/23/2023' },
  { value: '0.64', date: '3/24/2023' },
  { value: '0.64', date: '3/25/2023' },
  { value: '0.58', date: '3/26/2023' },
  { value: '0.55', date: '3/27/2023' },
  { value: '0.63', date: '3/28/2023' },
  { value: '0.62', date: '3/29/2023' },
  { value: '0.62', date: '3/30/2023' },
  { value: '0.61', date: '3/31/2023' },
  { value: '0.58', date: '4/1/2023' },
  { value: '0.58', date: '4/2/2023' },
  { value: '0.59', date: '4/3/2023' },
  { value: '0.61', date: '4/4/2023' },
  { value: '0.59', date: '4/5/2023' },
  { value: '0.59', date: '4/6/2023' },
  { value: '0.59', date: '4/7/2023' },
  { value: '0.56', date: '4/8/2023' },
  { value: '0.53', date: '4/9/2023' },
  { value: '0.56', date: '4/10/2023' },
  { value: '0.51', date: '4/11/2023' },
  { value: '0.52', date: '4/12/2023' },
  { value: '0.52', date: '4/13/2023' },
  { value: '0.57', date: '4/14/2023' },
  { value: '0.55', date: '4/15/2023' },
  { value: '0.52', date: '4/16/2023' },
  { value: '0.54', date: '4/17/2023' },
  { value: '0.51', date: '4/18/2023' },
  { value: '0.49', date: '4/19/2023' },
  { value: '0.48', date: '4/20/2023' },
  { value: '0.45', date: '4/21/2023' },
  { value: '0.45', date: '4/22/2023' },
  { value: '0.45', date: '4/23/2023' },
  { value: '0.44', date: '4/24/2023' },
  { value: '0.46', date: '4/25/2023' },
  { value: '0.44', date: '4/26/2023' },
  { value: '0.43', date: '4/27/2023' },
  { value: '0.44', date: '4/28/2023' },
  { value: '0.44', date: '4/29/2023' },
  { value: '0.40', date: '4/30/2023' },
  { value: '0.44', date: '5/1/2023' },
  { value: '0.39', date: '5/2/2023' },
  { value: '0.37', date: '5/3/2023' },
  { value: '0.37', date: '5/4/2023' },
  { value: '0.36', date: '5/5/2023' },
  { value: '0.36', date: '5/6/2023' },
  { value: '0.34', date: '5/7/2023' },
  { value: '0.34', date: '5/8/2023' },
  { value: '0.34', date: '5/9/2023' },
  { value: '0.33', date: '5/10/2023' },
  { value: '0.32', date: '5/11/2023' },
  { value: '0.33', date: '5/12/2023' },
  { value: '0.34', date: '5/13/2023' },
  { value: '0.33', date: '5/14/2023' },
  { value: '0.32', date: '5/15/2023' },
  { value: '0.31', date: '5/16/2023' },
  { value: '0.31', date: '5/17/2023' },
  { value: '0.33', date: '5/18/2023' },
  { value: '0.36', date: '5/19/2023' },
  { value: '0.35', date: '5/20/2023' },
  { value: '0.34', date: '5/21/2023' },
  { value: '0.35', date: '5/22/2023' },
  { value: '0.34', date: '5/23/2023' },
  { value: '0.36', date: '5/24/2023' },
  { value: '0.38', date: '5/25/2023' },
  { value: '0.40', date: '5/26/2023' },
  { value: '0.40', date: '5/27/2023' },
  { value: '0.47', date: '5/28/2023' },
  { value: '0.43', date: '5/29/2023' },
  { value: '0.40', date: '5/30/2023' },
  { value: '0.39', date: '5/31/2023' },
  { value: '0.40', date: '6/1/2023' },
  { value: '0.43', date: '6/2/2023' },
  { value: '0.44', date: '6/3/2023' },
  { value: '0.41', date: '6/4/2023' },
  { value: '0.44', date: '6/5/2023' },
  { value: '0.44', date: '6/6/2023' },
  { value: '0.45', date: '6/7/2023' },
  { value: '0.42', date: '6/8/2023' },
  { value: '0.37', date: '6/9/2023' },
  { value: '0.38', date: '6/10/2023' },
  { value: '0.40', date: '6/11/2023' },
  { value: '0.39', date: '6/12/2023' },
  { value: '0.39', date: '6/13/2023' },
  { value: '0.37', date: '6/14/2023' },
  { value: '0.37', date: '6/15/2023' },
  { value: '0.40', date: '6/16/2023' },
  { value: '0.40', date: '6/17/2023' },
  { value: '0.37', date: '6/18/2023' },
  { value: '0.39', date: '6/19/2023' },
  { value: '0.44', date: '6/20/2023' },
  { value: '0.43', date: '6/21/2023' },
  { value: '0.45', date: '6/22/2023' },
  { value: '0.43', date: '6/23/2023' },
  { value: '0.45', date: '6/24/2023' },
  { value: '0.44', date: '6/25/2023' },
  { value: '0.47', date: '6/26/2023' },
  { value: '0.47', date: '6/27/2023' },
  { value: '0.46', date: '6/28/2023' },
  { value: '0.45', date: '6/29/2023' },
  { value: '0.46', date: '6/30/2023' },
  { value: '0.47', date: '7/1/2023' },
  { value: '0.52', date: '7/2/2023' },
  { value: '0.52', date: '7/3/2023' },
  { value: '0.49', date: '7/4/2023' },
  { value: '0.49', date: '7/5/2023' },
  { value: '0.48', date: '7/6/2023' },
  { value: '0.48', date: '7/7/2023' },
  { value: '0.46', date: '7/8/2023' },
  { value: '0.45', date: '7/9/2023' },
  { value: '0.47', date: '7/10/2023' },
  { value: '0.49', date: '7/11/2023' },
  { value: '0.52', date: '7/12/2023' },
  { value: '0.54', date: '7/13/2023' },
  { value: '0.51', date: '7/14/2023' },
  { value: '0.52', date: '7/15/2023' },
  { value: '0.49', date: '7/16/2023' },
  { value: '0.48', date: '7/17/2023' },
  { value: '0.48', date: '7/18/2023' },
]

export default chartMockData
