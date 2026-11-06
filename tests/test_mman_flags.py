import json
import os
import unittest

class TestMmanFlags(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'sys_mman_posix_flags.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_prot_flags(self):
        self.assertEqual(self.data['PROT_READ'], 1)
        self.assertEqual(self.data['PROT_WRITE'], 2)
        self.assertEqual(self.data['PROT_EXEC'], 4)

if __name__ == '__main__':
    unittest.main()
