export const handleFormData = (inputDatas: any, formData: any) => {
  Object.keys(inputDatas).forEach((key: any) => {
    formData.append(key, inputDatas[key]);
  });
};
export const handleArrayOfObjectFormData = (
  arrayOfObjects: any[],
  formData: any,
  name: string
) => {
  arrayOfObjects.forEach((item, index) => {
    for (const [key, value] of Object.entries(item)) {
      formData.append(`${name}[${index}][${key}]`, value);
    }
  });
};
