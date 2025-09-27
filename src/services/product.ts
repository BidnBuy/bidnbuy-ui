// (removed stray global formData usage)
import { axiosInstance } from '@/lib/axios';
import type { UploadProductFormValues } from '@/lib/validations/upload-product';

export const productService = {
  upload: async (data: UploadProductFormValues, token: string) => {
    const formData = new FormData();
    formData.append('itemName', data.itemName);
    formData.append('category', data.category);
    formData.append('condition', data.condition);
    formData.append('description', data.description);
    formData.append('basePrice', data.basePrice.toString());
    formData.append('startingBidPrice', data.startingBidPrice.toString());
    formData.append('quantity', data.quantity.toString());
    formData.append('deliveryType', data.deliveryType);
    formData.append('handlingTime', data.handlingTime);
    // Optional fields only if defined
    if (data.discountPrice !== undefined) formData.append('discountPrice', data.discountPrice.toString());
    if (data.buyItNowPrice !== undefined) formData.append('buyItNowPrice', data.buyItNowPrice.toString());
    if (data.reservePrice !== undefined) formData.append('reservePrice', data.reservePrice.toString());
    if (data.length !== undefined) formData.append('length', data.length.toString());
    if (data.width !== undefined) formData.append('width', data.width.toString());
    if (data.height !== undefined) formData.append('height', data.height.toString());
    if (data.weight !== undefined) formData.append('weight', data.weight.toString());
    // Files
    data.files.forEach((file) => {
      formData.append('files', file);
    });
    // Add mock values for missing fields
    formData.append('_vendor', 'mock-vendor-id');
    formData.append('categories', 'mock-category');
    formData.append('auctionPrice', '0');
    formData.append('isApproved', 'true');
    formData.append('offers', 'mock-offer');
    // Debug: log all FormData keys and values
    for (let pair of formData.entries()) {
      console.log(pair[0]+ ':', pair[1]);
    }
    const response = await axiosInstance.post('/api/v1/product', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
