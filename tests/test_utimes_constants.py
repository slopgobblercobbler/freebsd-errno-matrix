import json
import os
import unittest

class TestUtimesConstants(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_utimes_constants.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_utime_flags(self):
        self.assertEqual(self.data['UTIME_NOW'], 0x3FFFFFFF)
        self.assertEqual(self.data['UTIME_OMIT'], 0x3FFFFFFE)

if __name__ == '__main__':
    unittest.main()
