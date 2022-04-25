import { compare, sortData } from './sort';

describe('sort', () => {
  describe('compare', () => {
    describe('given direction is "asc"', () => {
      it('should return true if A is less than B', () => {
        expect(compare(1, 2, 'asc')).toBe(true);
      });
    });

    describe('given direction is "desc"', () => {
      it('should return false if B is less than A', () => {
        expect(compare(1, 2, 'desc')).toBe(false);
      });
    });
  });

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

    describe('given sort key is "clicks"', () => {
      describe('given a direction of "descending"', () => {
        it('should sort the data by "clicks" in "descending" order', () => {
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

          expect(sortData(mockData, 'clicks', 'desc')).toEqual(expected);
        });
      });

      describe('given a direction of "ascending"', () => {
        it('should sort the data by "clicks" in "ascending" order', () => {
          const expected = [
            { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },

            { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
            { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
            { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },
            { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
            { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },

            { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
            { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
            { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
            { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },
          ];

          expect(sortData(mockData, 'clicks', 'asc')).toEqual(expected);
        });
      });
    });

    describe('given sort key is "quantity"', () => {
      describe('given a direction of "descending"', () => {
        it('should sort the data by "quantity" in "descending" order', () => {
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

          expect(sortData(mockData, 'quantity', 'desc')).toEqual(expected);
        });
      });

      describe('given a direction of "ascending"', () => {
        it('should sort the data by "quantity" in "ascending" order', () => {
          const expected = [
            { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },

            { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
            { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
            { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
            { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },

            { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
            { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },
            { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
            { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
            { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },
          ];

          expect(sortData(mockData, 'quantity', 'asc')).toEqual(expected);
        });
      });
    });

    describe('given sort key is "amount"', () => {
      describe('given a direction of "descending"', () => {
        it('should sort the data by "amount" in "descending" order', () => {
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

          expect(sortData(mockData, 'amount', 'desc')).toEqual(expected);
        });
      });

      describe('given a direction of "ascending"', () => {
        it('should sort the data by "amount" in "ascending" order', () => {
          const expected = [
            { "category": "$total", "itemName": "$total", "clicks": 160, "quantity": 18, "amount": 702 },

            { "category": "Electronics", "itemName": "$total", "clicks": 100, "quantity": 6, "amount": 665 },
            { "category": "Electronics", "itemName": "Toaster", "clicks": 41, "quantity": 1, "amount": 40 },
            { "category": "Electronics", "itemName": "Microwave", "clicks": 4, "quantity": 1, "amount": 85 },
            { "category": "Electronics", "itemName": "Speakers", "clicks": 43, "quantity": 3, "amount": 240 },
            { "category": "Electronics", "itemName": "TV", "clicks": 12, "quantity": 1, "amount": 300 },

            { "category": "Household", "itemName": "$total", "clicks": 60, "quantity": 12, "amount": 37 },
            { "category": "Household", "itemName": "Fairy dish liquid", "clicks": 44, "quantity": 5, "amount": 10 },
            { "category": "Household", "itemName": "Toothbrush", "clicks": 4, "quantity": 4, "amount": 12 },
            { "category": "Household", "itemName": "Hand wash", "clicks": 12, "quantity": 3, "amount": 15 },
          ];

          expect(sortData(mockData, 'amount', 'asc')).toEqual(expected);
        });
      });
    });
  });
});
