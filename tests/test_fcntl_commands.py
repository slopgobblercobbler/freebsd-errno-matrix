import json
import os
import unittest

class TestFcntlCommands(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'fcntl_commands.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_commands(self):
        self.assertEqual(self.data['F_DUPFD'], 0)
        self.assertEqual(self.data['F_GETFL'], 3)
        self.assertEqual(self.data['F_DUPFD_CLOEXEC'], 17)

if __name__ == '__main__':
    unittest.main()
