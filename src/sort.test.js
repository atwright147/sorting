import { sortData } from './sort';

describe('sort', () => {
  describe('sortData', () => {
    let mockData;

    beforeEach(() => {
      mockData = [
        {
          category: 'Electronics',
          itemName: 'TV',
          clicks: '12',
          quantity: '1',
          amount: '300'
        },
        {
          category: 'Household',
          itemName: '$total',
          clicks: '60',
          quantity: '12',
          amount: '37'
        },
        {
          category: 'Electronics',
          itemName: '$total',
          clicks: '100',
          quantity: '6',
          amount: '665'
        },
        {
          category: 'Household',
          itemName: 'Fairy dish liquid',
          clicks: '44',
          quantity: '5',
          amount: '10'
        },
        {
          category: 'Electronics',
          itemName: 'Speakers',
          clicks: '43',
          quantity: '4',
          amount: '240'
        },
        {
          category: '$total',
          itemName: '$total',
          clicks: '160',
          quantity: '18',
          amount: '702'
        },
        {
          category: 'Electronics',
          itemName: 'Microwave',
          clicks: '4',
          quantity: '1',
          amount: '85'
        },
        {
          category: 'Household',
          itemName: 'Toothbrush',
          clicks: '4',
          quantity: '4',
          amount: '12'
        },
        {
          category: 'Household',
          itemName: 'Hand wash',
          clicks: '12',
          quantity: '3',
          amount: '15'
        },
        {
          category: 'Electronics',
          itemName: 'Toaster',
          clicks: '41',
          quantity: '1',
          amount: '40'
        }
      ]
    });

    it('should sort the data in a hierarchical order', () => {
      const expected = [
        {
          amount: '702',
          category: '$total',
          clicks: '160',
          itemName: '$total',
          quantity: '18'
        },
        {
          amount: '665',
          category: 'Electronics',
          clicks: '100',
          itemName: '$total',
          quantity: '6'
        },
        {
          amount: '85',
          category: 'Electronics',
          clicks: '4',
          itemName: 'Microwave',
          quantity: '1'
        },
        {
          amount: '240',
          category: 'Electronics',
          clicks: '43',
          itemName: 'Speakers',
          quantity: '4'
        },
        {
          amount: '40',
          category: 'Electronics',
          clicks: '41',
          itemName: 'Toaster',
          quantity: '1'
        },
        {
          amount: '300',
          category: 'Electronics',
          clicks: '12',
          itemName: 'TV',
          quantity: '1'
        },
        {
          amount: '37',
          category: 'Household',
          clicks: '60',
          itemName: '$total',
          quantity: '12'
        },
        {
          amount: '10',
          category: 'Household',
          clicks: '44',
          itemName: 'Fairy dish liquid',
          quantity: '5'
        },
        {
          amount: '15',
          category: 'Household',
          clicks: '12',
          itemName: 'Hand wash',
          quantity: '3'
        },
        {
          amount: '12',
          category: 'Household',
          clicks: '4',
          itemName: 'Toothbrush',
          quantity: '4'
        }
      ];
      expect(sortData(mockData)).toEqual(expected);
    });
  });
});
