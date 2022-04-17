import { sortData } from './sort';

describe('sort', () => {
  describe('sortData', () => {
    let mockData;

    beforeEach(() => {
      mockData = [
        { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },
        { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
        { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
        { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },
        { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },
        { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },
        { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
        { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
        { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
        { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
      ];
    });

    fdescribe('given sort key is "clicks"', () => {
      it('should sort the data by "clicks"', () => {
        const expected = [
          { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },
          { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
          { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },
          { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
          { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },
          { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
          { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
          { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },
          { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
          { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
        ];

        console.info('ACTUAL');
        console.table(sortData(mockData, 'clicks'));
        console.info('EXPECTED');
        console.table(expected);
        expect(sortData(mockData, 'clicks')).toEqual(expected);
      });
    });

    describe('given sort key is "quantity"', () => {
      it('should sort the data by "quantity"', () => {
        const expected = [
          { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },
          { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
          { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },
          { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
          { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
          { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
          { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },
          { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },
          { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
          { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
         ];

        expect(sortData(mockData, 'quantity')).toEqual(expected);
      });
    });

    describe('given sort key is "amount"', () => {
      it('should sort the data by "amount"', () => {
        const expected = [
          { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },
          { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
          { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },
          { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },
          { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
          { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
          { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
          { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
          { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
          { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },
         ];

        expect(sortData(mockData, 'amount')).toEqual(expected);
      });
    });
  });
});
