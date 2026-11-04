import json
import os
import unittest

class TestPosixSpawn(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_spawn_attrs.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_flags(self):
        self.assertEqual(self.data['POSIX_SPAWN_RESETIDS'], 0x01)
        self.assertEqual(self.data['POSIX_SPAWN_SETSIGMASK'], 0x08)

if __name__ == '__main__':
    unittest.main()
