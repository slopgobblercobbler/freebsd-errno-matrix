import json
import os
import unittest

class TestFstatfsTypes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_fstatfs_constants.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_types(self):
        self.assertEqual(self.data['FS_UFS'], "0x00000035")
        self.assertTrue(self.data['FS_TMPFS'].startswith("0x"))

if __name__ == '__main__':
    unittest.main()
