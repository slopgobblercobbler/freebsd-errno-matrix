#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct PosixSpawnCloexecDefaultDef {
    static constexpr std::uint16_t flag_mask = 0x2000;
    static constexpr std::string_view flag_name = "POSIX_SPAWN_CLOEXEC_DEFAULT";
};
}
