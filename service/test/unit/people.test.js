const people = require('../../modules/people')

describe('People endpoint', ()=>{
    const req = {}
    const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    }
   
    it('Sould get all people from salesloft api', async ()=>{
        const mockPeople = [{
            id:1,
            first_name:'a',
            last_name:'b',
            full_email_address:'a@g.com',
            title: 'job'
        }]
        const axios = {
            get: jest.fn().mockResolvedValue({ data: {data: mockPeople} })
        }
        const redis = {
            instance:{
                get: jest.fn().mockResolvedValue(mockPeople),
                set: jest.fn()
            },
            key: 'salesloftApi',
            feature_redis: true
        }
        await people({axios, redis}).get(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(mockPeople)
    })

    it('should raise bad request error to api', async ()=>{
        const axios = {
            get: jest.fn().mockResolvedValue({ data: null })
        }
        const redis = {
            instance:{
                get: jest.fn().mockResolvedValue(null),
                set: jest.fn()
            },
            key: 'salesloftApi',
            feature_redis: false
        }
        await people({axios, redis}).get(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    })
});